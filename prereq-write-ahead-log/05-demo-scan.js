'use strict'

const path = require('path')
const fs = require('fs')
const WAL = require('./wal')

const LOG_FILE = path.join(__dirname, '05-test.log')

function cleanup()
{
    if (fs.existsSync(LOG_FILE))
        fs.unlinkSync(LOG_FILE)
}

function seedLog(wal)
{
    const payloads = ['alpha', 'bravo', 'charlie', 'delta', 'echo']
    const offsets = []

    for (const p of payloads)
    {
        offsets.push(wal.append(p))
    }

    return {payloads, offsets}
}

function demonstrateFullScan(wal)
{
    console.log('--- Full scan from offset 0 (recovery path) ---\n')

    const collected = []
    const hwm = wal.scanFrom(0, (offset, payload) => {
        collected.push({offset, payload})
        console.log('  offset ' + String(offset).padStart(4) + ' -> "' + payload + '"')
    })

    console.log('\n Entries scanned: ' + collected.length)
    console.log('  Higher-water mark: ' + hwm)
    console.log('  Matches WAL end: ' +(hwm === wal.offset))

    return collected
}

function demonstratePartialScan(wal, fromOffset)
{
    console.log('\n--- Partial scan from offset ' + fromOffset + ' (consumer resumption) ---\n')

    const collected = []
    const hwm = wal.scanFrom(fromOffset, (offset, payload) => {
        collected.push({offset, payload})
        console.log('  offset ' + String(offset).padStart(4) + ' -> "' + payload + '"')
    })

    console.log('\n Entries scanned: ' + collected.length)
    console.log('  High-water mark: ' + hwm)
    console.log('  Matches WAL end: ' + (hwm === wal.offset))
}

function main()
{
    console.log('=== Scan From Arbitrary Offset ===\n')
    cleanup()

    const wal = new WAL(LOG_FILE)
    const { offsets } = seedLog(wal)

    console.log('  Wrote 5 entires at offsets: [' + offsets.join(', ') + ']\n')

    demonstrateFullScan(wal)
    demonstratePartialScan(wal, offsets[2])

    wal.close()
    cleanup()
}

main()