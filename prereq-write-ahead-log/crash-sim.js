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

module.exports = { simulateCrashDuringWrite }