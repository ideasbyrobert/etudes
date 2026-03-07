'use strict'

const fs = require('fs')

function simulateCrashDuringWrite(filePath, newContent, fraction)
{
    const fd = fs.openSync(filePath, 'w')
    const cutoff = Math.floor(newContent.length * fraction)
    const partial = Buffer.from(newContent.slice(0, cutoff))
    fs.writeSync(fd, partial)
    fs.close(fd)
}

function simulateTornWALWrite(filePath, mode)
{
    const fd = fs.openSync(filePath, 'a')

    if (mode === 'torn-header')
    {
        const partial = Buffer.allocUnsafe(2)
        partial.writeUInt16BE(0x00, 0)
        fs.writeSync(fd, partial)
    }
    else if (mode === 'torn-payload')
    {
        const header = Buffer.allocUnsafe(4)
        header.writeUInt32BE(100, 0)
        const partialPayload = Buffer.from('partial')
        fs.writeSync(fd, Buffer.concat([header, partialPayload]))
    }
}

module.exports = { simulateCrashDuringWrite, simulateTornWALWrite }