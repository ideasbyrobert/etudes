'use strict'

const fs = require('fs')

class NaiveKVStore
{
    constructor(filePath)
    {
        this.filePath = filePath
    }

    _read()
    {
        try
        {
            return JSON.parse(fs.readFileSync(this.filePath, 'utf8'))
        }
        catch
        {
            return {}
        }
    }

    _write(data)
    {
        fs.writeFileSync(this.filePath, JSON.stringify(data))
    }

    put(key, value)
    {
        const data = this._read()
        data[key] = value
        this._write(data)
    }

    get(key)
    {
        return this._read()[key]
    }

    seed(entries)
    {
        this._write(entries)
    }

    fileSize()
    {
        return fs.statSync(this.filePath).size
    }

    destroy()
    {
        if (fs.existsSync(this.filePath))
        {
            fs.unlinkSync(this.filePath)
        }
    }
}

module.exports = NaiveKVStore