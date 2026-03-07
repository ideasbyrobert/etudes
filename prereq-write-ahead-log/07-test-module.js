'use strict'

const path = require('path')
const fs = require('fs')
const WAL = require('./wal')
const { simulateTornWALWrite } = require('./crash-sim')

const LOG_FILE = path.join(__dirname, '07-test.log')

let passed = 0
let failed = 0

function assert(label, condition)
{
    if (condition)
    {
        console.log('  ✓ ' + label)
        passed++
    }
    else 
    {
        console.log('  ✗ ' + label)
        failed++
    }
}

function cleanup()
{
    if (fs.existsSync(LOG_FILE))
        fs.unlinkSync(LOG_FILE)
}

function testAppend(wal)
{
    console.log('\n--- Test: append ---')

    const o1 = wal.append('first')
    const o2 = wal.append('second')
    const o3 = wal.append('third')

    assert('first entry at offset 0', o1 === 0)
    assert('offsets are strictly increasing', o2 > o1 && o3 > o2)
    assert('offset tracks file position', wal.offset === fs.fstatSync(wal.fd).size)

    return [o1, o2, o3]
}

function testReadAt(wal, offsets)
{
    console.log('\n--- Test: readAt ---')

    const r1 = wal.readAt(offsets[0])
    const r2 = wal.readAt(offsets[1])
    const r3 = wal.readAt(offsets[2])

    assert('readAt[0] payload', r1.payload === 'first')
    assert('readAt[1] payload', r2.payload === 'second')
    assert('readAt[2] payload', r3.payload === 'third')

    assert('readAt[0].nextOffset === offsets[1]', r1.nextOffset === offsets[1])
    assert('readAt[1].nextOffset === offsets[2]', r2.nextOffset === offsets[2])
    assert('readAt[2].nextOffset === wal.offset', r3.nextOffset === wal.offset)
}

function testScanFrom(wal, offsets)
{
    console.log('\n--- Test: scanFrom ---')

    const fullScan = []
    const fullHwm = wal.scanFrom(0, (o, p) => fullScan.push({ o, p }))

    assert('full scan finds 3 entries', fullScan.length === 3)
    assert('full scan hwm === wal.offset', fullHwm === wal.offset)

    const partialScan = []
    const partialHwm = wal.scanFrom(offsets[1], (o, p) => partialScan.push({ o, p }))

    assert('partial scan from offsets[1] finds 2 entries', partialScan.length === 2)
    assert('partial scan start at "second"', partialScan[0].p === 'second')
    assert('partial scan hwm === wal.offset', partialHwm === wal.offset)
}

function testReplay()
{
    console.log('\n--- Test: replay (close -> re-open -> reconstruct ---')

    const wal = new WAL(LOG_FILE)
    const replayed = []
    const hwm = wal.replay((o, p) => replayed.push({ o, p }))
    
    assert('replay finds 3 entries', replayed.length === 3)

    assert('replay entry 0', replayed[0].p === 'first')
    assert('replay entry 1', replayed[1].p === 'second')
    assert('replay entry 2', replayed[2].p === 'third')

    assert('replay hwm === wal.offset', hwm === wal.offset)

    wal.close()
}

function testRecovery()
{
    console.log('\n--- Test: recovery (torn write -> truncate -> clean open) ---')

    simulateTornWALWrite(LOG_FILE, 'torn-payload')
    const corruptSize = fs.statSync(LOG_FILE).size

    const wal = new WAL(LOG_FILE)
    const repairedSize = fs.fstatSync(wal.fd).size

    assert('file was truncated', repairedSize < corruptSize)

    const entries = []
    wal.replay((o, p) => entries.push(p))

    assert('3 valid entries survive', entries.length === 3)
    assert('no corrupt data in replay', entries.join(',') === 'first,second,third')

    wal.close()
}

function main()
{
    console.log('=== Module Interface Verification ===')
    cleanup()

    const wal = new WAL(LOG_FILE)
    const offsets = testAppend(wal)

    testReadAt(wal, offsets)
    testScanFrom(wal, offsets)

    wal.close()

    testReplay()
    testRecovery()

    cleanup()

    console.log('\n--- Results: ' + passed + ' passed, ' + failed + ' failed ---')
}

main()
