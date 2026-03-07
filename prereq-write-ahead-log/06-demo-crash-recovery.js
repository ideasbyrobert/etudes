'use strict'

const path = require('path')
const fs = require('fs')
const WAL = require('./wal')
const { simulateTornWALWrite } = require('./crash-sim')

const LOG_FILE = path.join(__dirname, '06-test.log')

function cleanup()
{
    if (fs.existsSync(LOG_FILE))
    {
        fs.unlinkSync(LOG_FILE)
    }
}

function seedValidEntries()
{
    const fd = fs.openSync(LOG_FILE, 'a+')
    const Record = require('./record')
    const offsets = []
    let offset = 0

    for (const p of ['alpha', 'bravo', 'charlie'])
    {
        const rec = Record.encode(p)
        fs.writeSync(fd, rec, 0, rec.length, offset)
        offsets.push(offset)
        offset += rec.length
    }

    fs.closeSync(fd)
    return {offsets, endOffset: offset}
}

function printLogContents(label)
{
    console.log('  ' + label + ':')
    const wal = new WAL(LOG_FILE)
    let count = 0

    wal.scanFrom(0, (offset, payload) => {
        console.log('    offset ' + String(offset).padStart(4) + ' -> "' + payload + '"')
        count++
    })
    console.log('    (' + count + ' entries, file size: ' + fs.fstatSync(wal.fd).size + ' bytes)\n')
    wal.close()
}

function demonstrateTornHeader()
{
    console.log('=== Scenario A: Torn Header ===\n')
    cleanup()

    const { endOffset } = seedValidEntries()
    console.log('  Seeded 3 valid entires. File size: ' + endOffset + ' bytes.\n')
    simulateTornWALWrite(LOG_FILE, 'torn-header')
    console.log('  Injected torn header (2 bytes). File size: ' + fs.statSync(LOG_FILE).size + ' bytes.\n')

    console.log('  Running recovery...')
    printLogContents('After recovery')
}

function demonstrateTornPayload()
{
    console.log('=== Scenario B: Torn Payload ===\n')
    cleanup()

    const { endOffset } = seedValidEntries()
    console.log('  Seeded 3 valid entries. File size: ' + endOffset + ' bytes.')
    simulateTornWALWrite(LOG_FILE, 'torn-payload')
    console.log('  Injected torn payload (header says 100, wrote 7). File size: '
        + fs.statSync(LOG_FILE).size + ' bytes.\n') 

    console.log('  Running recovery...')
    printLogContents('After recovery')
}

function main()
{
    console.log('=== Torn-Write Dfetection and File Repair ===\n')
    demonstrateTornHeader()
    demonstrateTornPayload()
    cleanup()
}

main()
