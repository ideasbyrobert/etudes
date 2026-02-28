"use strict"

class Momento 
{
  constructor() 
  {
    this._cache = new Map()
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
    return Promise.resolve()
  }

  keys() 
  {
    return Array.from(this._cache.keys())
  }
}

module.exports = { Momento }
