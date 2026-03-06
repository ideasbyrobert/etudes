'use strict'

const fs = require('fs')
const Record = require('./record')

class WAL
{
    constructor(filePath)
    {
        this.filePath = filePath
        this.fd = fs.openSync(filePath, 'a+')
        this.offset = fs.fstatSync(this.fd).size
    }

    append(payload)
    {
        const record = Record.encode(payload)
        const writeOffset = this.offset
        fs.writeSync(this.fd, record, 0, record.length, writeOffset)
        this.offset += record.length
        return writeOffset
    }

    readAt(offset)
    {
        const headerBuf = Buffer.allocUnsafe(Record.HEADER_SIZE)
        fs.readSync(this.fd, headerBuf, 0, Record.HEADER_SIZE, offset)

        const length = headerBuf.readUInt32BE(0)
        const payloadBuf = Buffer.allocUnsafe(length)
        fs.readSync(this.fd, payloadBuf, 0, length, offset + Record.HEADER_SIZE)

        return {
            payload: payloadBuf.toString('utf8'),
            nextOffset: offset + Record.HEADER_SIZE + length,
        }
    }

    scanFrom(startOffset, callback)
    {
        const fileSize = fs.fstatSync(this.fd).size
        let current = startOffset

        while (current + Record.HEADER_SIZE < fileSize)
        {
            const headerBuf = Buffer.allocUnsafe(Record.HEADER_SIZE)
            fs.readSync(this.fd, headerBuf, 0, Record.HEADER_SIZE, current)

            const length = headerBuf.readUInt32BE(0)

            if (current + Record.HEADER_SIZE + length > fileSize)
            {
                break
            }

            const payloadBuf = Buffer.allocUnsafe(length)
            fs.readSync(this.fd, payloadBuf, 0, length, current + Record.HEADER_SIZE)

            callback(current, payloadBuf.toString('utf8'))
            current += Record.HEADER_SIZE + length
        }

        return current
    }

    close()
    {
        fs.closeSync(this.fd)
        this.fd = null
    }
}

module.exports = WAL