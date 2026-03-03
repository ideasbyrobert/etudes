'use strict'

const { Memento } = require('./memento')
const { StorageBackend } = require('./storage-backend')

class ExtensionHostStorage
{
    constructor(storagePath)
    {
        this._backend = new StorageBackend(storagePath)
        this._mementos = new Map()
    }

    getMemento(extensionId)
    {
        if (this._mementos.has(extensionId))
        {
            return this._mementos.get(extensionId)
        }

        const memento = new Memento(this._backend, extensionId)
        this._mementos.set(extensionId, memento)
        return memento
    }

    get backend()
    {
        return this._backend
    }
}

module.exports = { ExtensionHostStorage }