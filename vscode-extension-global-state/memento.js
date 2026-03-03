"use strict"

class Memento 
{
  constructor(initialData, onUpdate, namespace)
  {
    this._cache = new Map()
    this._onUpdate = onUpdate || null
    this._namespace = namespace || null
    this._keysForSync = new Set()

    if (initialData)
    {
      for (const [key, value] of Object.entries(initialData))
          this._cache.set(key, value)
    }
  }

  get(key, defaultValue)
  {
    if(this._cache.has(key))
    {
      return this._cache.get(key)
    }
    return defaultValue
  }

  update(key, value)
  {
    if (value === undefined)
    {
      this._cache.delete(key)
    }
    else
    {
      this._cache.set(key, value)
    }

    if(this._onUpdate)
    {
      return this._onUpdate(this._namespace, this._snapshot(), key)
    }

    return Promise.resolve()
  }

  keys()
  {
    return Array.from(this._cache.keys())
  }

  setKeysForSync(keys)
  {
    this._keysForSync = new Set(keys)
  }

  syncSnapshot()
  {
    const data = {}
    for (const key of this._keysForSync)
    {
      if(this._cache.has(key))
      {
        data[key] = this._cache.get(key)
      }
    }
    return data
  }

  get keysForSync()
  {
    return Array.from(this._keysForSync)
  }

  _snapshot()
  {
    const data = {}
    for (const [key, value] of this._cache)
      data[key] = value
    return data
  }
}

module.exports = { Memento }
