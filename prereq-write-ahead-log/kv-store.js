'use strict'

const WAL = require('./wal')

class KVStore
{
    constructor(logPath)
    {
        this.wal = new WAL(logPath)
        this.map = new Map()
        this._replayLog()
    }

    _replayLog()
    {
        this.wal.replay((offset, payload) => {
            this._apply(JSON.parse(payload))
        })
    }

    _apply(entry)
    {
        if(entry.op === 'put')
        {
            this.map.set(entry.key, entry.value)
        }
        else if (entry.op === 'delete')
        {
            this.map.delete(entry.key)
        }
    }

    put(key, value)
    {
        const entry = { op: 'put', key, value }
        this.wal.append(JSON.stringify(entry), { sync: true })
        this._apply(entry)
    }

    delete(key)
    {
        const entry = { op: 'delete', key }
        this.wal.append(JSON.stringify(entry), { sync: true })
        this._apply(entry)
    }

    get(key)
    {
        return this.map.get(key)
    }

    has(key)
    {
        return this.map.has(key)
    }

    size()
    {
        return this.map.size
    }

    close()
    {
        this.wal.close()
    }
}

module.exports = KVStore