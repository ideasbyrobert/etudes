'use strict'

function formatRecord(buf, headerSize)
{
    const header = buf.slice(0, headerSize).toString('hex')
    const payload = buf.slice(headerSize).toString('hex')
    return '[' + header + '] [' + payload + ']'
}

module.exports = { formatRecord }