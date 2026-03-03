"use strict"

class Memento 
{
  constructor(initialData, onUpdate, namespace)
  {
    this._cache = new Map()
    this._onUpdate = onUpdate || null
    this._namespace = namespace || null

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
      return this._onUpdate(this._namespace, this._snapshot())
    }

    return Promise.resolve()
  }

  keys()
  {
    return Array.from(this._cache.keys())
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
