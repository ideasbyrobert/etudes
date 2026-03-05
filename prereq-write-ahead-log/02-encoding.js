'use strict'

const Record = require('./record')
const { formatRecord } = require('./hex')

function main()
{
    console.log('=== Step 2: Binary Record Format (Encode / Decode) ===\n')

    const payloads = [
        'hello',
        '{"op":"put","key":"name","value":"Alice"}',
        ''
    ]

    console.log('--- Encoding ---\n')
    const encoded = []

    for (const p of payloads)
    {
        const buf = Record.encode(p)
        encoded.push(buf)

        const label = p.length > 0 ? '"' + p + '"' : '(empty string)'
        console.log('  Payload: ' + label)
        console.log('  Bytes:   ' + formatRecord(buf, Record.HEADER_SIZE))
        console.log('  Total:   ' + buf.length + ' bytes (' + Record.HEADER_SIZE + ' header + '
            + (buf.length - Record.HEADER_SIZE) + ' payload)')
        console.log('')
    }

    const combined = Buffer.concat(encoded)
    console.log('--- Decoding (from combined buffer) ---\n')
    console.log('  Combined buffer: ' + combined.length + ' bytes\n')

    let offset = 0
    let index = 0

    while (offset < combined.length)
    {
        const { payload, nextOffset } = Record.decode(combined, offset)
        const label = payload.length > 0 ? '"' + payload + '"' : '(empty string)'
        
        console.log('  Record ' + index + ' at offset ' + offset + ': ' + label)
        console.log('    next offset: ' + nextOffset)

        offset = nextOffset 
        index++
    }

    console.log('\n Final offset: ' + offset + ' (matches buffer length: ' 
        + (offset === combined.length) + ')')
}

main()