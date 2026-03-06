'use strict'

const path = require('path')
const fs = require('fs')
const WAL = require('./wal')

const LOG_FILE = path.join (__dirname, '04-test.log')

function cleanup()
{
    if (fs.existsSync(LOG_FILE))
        fs.unlinkSync(LOG_FILE)
}

function writeEntries(wal, payloads)
{
    const offsets = []
    for (const p of payloads)
    {
        offsets.push(wal.append(p))
    }
    return offsets
}

function demonstrateReadAt(wal, payloads, offsets)
{
    console.log('--- Reading each entry by offset ---\n')

    for (let i = 0; i < offsets.length; i++)
    {
        const { payload, nextOffset } = wal.readAt(offsets[i])
        const match = payload === payloads[i]

        console.log('  offset ' + String(offsets[i]).padStart(4) +
        '  -> "' + payload + '"' +
        '   next: ' + nextOffset +
        '   match: ' + match)
    }
}

function demonstrateOffsetChaining(wal, offsets)
{
    console.log('\n--- Offset chaining verification ---\n')

    for (let i = 0; i < offsets.length; i++)
    {
        const { nextOffset } = wal.readAt(offsets[i])

        if (i < offsets.length - 1)
        {
            const matches = nextOffset === offsets[i + 1]
            console.log('  entry ' + i + ': nextoffset ' + nextOffset +
                ' === writeOffset[' + (i + 1) + '] ' + offsets[i + 1] +
                '  ->  ' + matches)
        }
        else 
        {
            const matches = nextOffset === wal.offset
            console.log('  entry ' + i + ': nextOffset ' + nextOffset +
                ' === WAL end ' + wal.offset +
                ' ->  ' + matches
            )
        }
    }
}

function main()
{
    console.log('=== Read a Single Rntry at a Byte Offset ===\n')
    cleanup()

    const wal = new WAL(LOG_FILE)
    const payloads = [
        'first entry',
        '{"op":"put","key":"name","value":"ALICE"}',
        'third entry with more bytes to shift offsets'
    ]

    const offsets = writeEntries(wal, payloads)
    console.log(' Wrote ' + offsets.length + ' entries at offsets: [' + offsets.join(', ') + ']\n')

    demonstrateReadAt(wal, payloads, offsets)
    demonstrateOffsetChaining(wal, offsets)

    wal.close()
    cleanup()
}

main()