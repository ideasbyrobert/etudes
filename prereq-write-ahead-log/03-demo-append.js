'use strict'

const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')
const WAL = require('./wal')

const LOG_FILE = path.join(__dirname, '03-test.log')

function cleanup()
{
    if (fs.existsSync(LOG_FILE))
        fs.unlinkSync(LOG_FILE)
}

function demonstrateFirstRun()
{
    console.log('--- First run: appending to fresh log --\n')

    const wal = new WAL(LOG_FILE)
    const payloads = [
        'hello', 
        'world',
        '{"op":"put","key":"x","value":"42"}'
    ]

    for (const p of payloads)
    {
        const offset = wal.append(p)
        console.log('  offset ' + String(offset).padStart(4) + ' <- "' + p + '"')
    }

    console.log('\n WAL offset after first run: ' + wal.offset)
    wal.close()
}

function demonstrateRestart()
{
    console.log('\n--- Second run: re-opening existing log --\n')

    const wal = new WAL(LOG_FILE)
    console.log('  WAL offset on re-open: ' + wal.offset)

    const morePayloads = ['after-restart-1', 'after-restart-2']

    for (const p of morePayloads)
    {
        const offset = wal.append(p)
        console.log('  offset ' + String(offset).padStart(4) + ' <- "' + p + '"')
    }

    console.log('\n WAL offset after second run: ' + wal.offset)
    wal.close()
}

function inspectBinary()
{
    console.log('\n--- Raw binary layout (xxd) ---\n')
    const output = execSync('xxd ' + LOG_FILE + ' | head -20').toString()
    console.log(output)
}

function main()
{
    console.log('=== Append with Byte-Offset Tracking ===\n')
    cleanup()

    demonstrateFirstRun()
    demonstrateRestart()

    inspectBinary()
    cleanup()
}

main()