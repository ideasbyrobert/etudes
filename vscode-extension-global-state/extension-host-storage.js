'use strict'

const { Memento } = require('./memento')
const { StorageBackend } = require('./storage-backend')
const { FlushScheduler } = require('./flush-scheduler')

const DEFAULT_FLUSH_DELAY_MS = 100

class ExtensionHostStorage
{
    constructor(storagePath, flushDelayMs)
    {
        this._backend = new StorageBackend(storagePath)
        this._mementos = new Map()

        this._store = this._backend.load()

        this._scheduler = new FlushScheduler(
            () => this._flushAll(),
            flushDelayMs !== undefined ? flushDelayMs : DEFAULT_FLUSH_DELAY_MS
        )
    }

    getMemento(extensionId)
    {
        if (this._mementos.has(extensionId))
        {
            return this._mementos.get(extensionId)
        }

        const data = this._store[extensionId] || {}

        const memento = new Memento(
            data,
            (namespace, cacheSnapshot) => this._onMementoUpdate(namespace, cacheSnapshot),
            extensionId
        )

        this._mementos.set(extensionId, memento)
        return memento
    }

    _onMementoUpdate(namespace, cacheSnapshot)
    {
        this._store[namespace] = cacheSnapshot
        return this._scheduler.schedule()
    }

    _flushAll()
    {
        return this._backend.save(this._store)
    }

    get backend()
    {
        return this._backend
    }

    get scheduler()
    {
        return this._scheduler
    }
}

module.exports = { ExtensionHostStorage }