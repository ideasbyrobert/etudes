'use strict'

class FlushScheduler
{
    constructor(flushFn, delayMs)
    {
        this._flushFn = flushFn
        this._delayMs = delayMs
        this._timer = null
        this._flushPromise = null
        this._pendingResolvers = []
        this._flushCount = 0
    }

    schedule()
    {
        return new Promise((resolve, reject) => {
            this._pendingResolvers.push({resolve, reject})

            if (this._timer)
            {
                clearTimeout(this._timer)
            }

            this._timer = setTimeout(() => this._executFlush(), this._delayMs)
        })
    }

    _executFlush()
    {
        this._timer = null

        const resolvers = this._pendingResolvers
        this._pendingResolvers = []

        this._flushFn()
            .then(() => {
                this._flushCount++
                for (const r of resolvers)
                    r.resolve()
            })
            .catch((err) => {
                for (const r of resolvers)
                    r.reject(err)
            })
    }

    get flushCount()
    {
        return this._flushCount
    }
}

module.exports = { FlushScheduler }