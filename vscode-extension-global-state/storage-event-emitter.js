'use strict'

class StorageEventEmitter
{
    constructor()
    {
        this._listeners = []
    }

    on(listener)
    {
        this._listeners.push(listener)

        return () => {
            const index = this._listeners.indexOf(listener)
            if (index !== -1)
            {
                this._listeners.splice(index, 1)
            }
        }
    }

    emit(event)
    {
        for (const listener of this._listeners)
        {
            listener(event)
        }
    }

    get listenerCount()
    {
        return this._listeners.length
    }
}

module.exports = { StorageEventEmitter }