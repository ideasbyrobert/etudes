'use strict'

const { Memento } = require('./memento')
const { StorageBackend } = require('./storage-backend')
const { FlushScheduler } = require('./flush-scheduler')
const { StorageEventEmitter } = require('./storage-event-emitter')

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

        this._emitter = new StorageEventEmitter()
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
            (namespace, cacheSnapshot, key) => this._onMementoUpdate(namespace, cacheSnapshot, key),
            extensionId
        )

        this._mementos.set(extensionId, memento)
        return memento
    }

    _onMementoUpdate(namespace, cacheSnapshot, key)
    {
        this._store[namespace] = cacheSnapshot

        this._emitter.emit({
            extensionId: namespace,
            key: key,
            value: cacheSnapshot[key]
        })

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

    onDidChangeStorage(listener)
    {
        return this._emitter.on(listener)
    }

    getSyncData()
    {
        const syncPayload = {}

        for (const [extensionId, memento] of this._mementos)
        {
            const snapshot = memento.syncSnapshot()

            if (Object.keys(snapshot).length > 0)
            {
                syncPayload[extensionId] = snapshot
            }
        }

        return syncPayload
    }
}

module.exports = { ExtensionHostStorage }