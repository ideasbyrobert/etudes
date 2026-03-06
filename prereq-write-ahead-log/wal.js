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

    close()
    {
        fs.closeSync(this.fd)
        this.fd = null
    }
}

module.exports = WAL