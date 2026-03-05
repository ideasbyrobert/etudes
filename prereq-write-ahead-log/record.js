'use strict'

const HEADER_SIZE = 4

class Record
{
    static encode(payload)
    {
        const body = Buffer.from(payload, 'utf8')
        const header = Buffer.allocUnsafe(HEADER_SIZE)
        header.writeUInt32BE(body.length, 0)
        return Buffer.concat([header, body])
    }

    static decode(buffer, offset)
    {
        const length = buffer.readUInt32BE(offset)
        const payloadStart = offset + HEADER_SIZE
        const payload = buffer.toString('utf8', payloadStart, payloadStart + length)
        
        return {
            payload,
            nextOffset: payloadStart + length
        } 
    }
}

Record.HEADER_SIZE = HEADER_SIZE

module.exports = Record