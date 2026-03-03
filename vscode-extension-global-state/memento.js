"use strict"

class Memento 
{
  constructor(backend, namespace) 
  {
    this._cache = new Map()
    this._backend = backend || null
    this._namespace = namespace || null

    if(this._backend)
    {
      const store = this._backend.load()
      const data = this._namespace ? (store[this._namespace] || {}) : store
      for (const [key, value] of Object.entries(data))
        this._cache.set(key, value)
    }
  }

  get(key, defaultValue) 
  {
    if (this._cache.has(key)) 
    {
      return this._cache.get(key)
    }
    return defaultValue
  }

  update(key, value) 
  {
    if (value == undefined) 
    {
      this._cache.delete(key)
    } 
    else 
    {
      this._cache.set(key, value)
    }

    if (this._backend)
    {
      return this._flush()
    }

    return Promise.resolve()
  }

  keys() 
  {
    return Array.from(this._cache.keys())
  }

  _flush()
  {
    const data = {}
    for (const [key, value] of this._cache)
      data[key] = value

    if(this._namespace)
    {
      const store = this._backend.load()
      store[this._namespace] = data
      return this._backend.save(store)
    }

    return this._backend.save(data)
  }
}

module.exports = { Memento }
