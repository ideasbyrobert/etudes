'use strict'

const fs = require('fs')
const path = require('path')

class StorageBackend
{
    constructor(filePath)
    {
        this._filePath = filePath
        this._writeCount = 0
    }

    load()
    {
        try
        {
            const raw = fs.readFileSync(this._filePath, 'utf-8')
            return JSON.parse(raw)
        }
        catch(err)
        {
            if(err.code === 'ENOENT')
            {
                return {}
            }
            throw err
        }
    }

    save(data)
    {
        return new Promise((resolve, reject) => {
            const dir = path.dirname(this._filePath)
            fs.mkdirSync(dir, { recursive: true })

            const json = JSON.stringify(data, null, 2)
            fs.writeFile(this._filePath, json, 'utf-8', (err) => {
                if(err) 
                    return reject(err)
                this._writeCount++;
                resolve()
            })
        })
    }

    get writeCount() 
    {
        return this._writeCount
    }
}

module.exports = { StorageBackend }