'use strict'

const path = require('path')
const fs = require('fs')
const { Memento } = require('./memento')
const { StorageBackend } = require('./storage-backend')

const STORAGE_PATH = path.join(__dirname, 'data', 'globalState.json')

async function main()
{
    try 
    {
        fs.unlinkSync(STORAGE_PATH)
    }
    catch(e)
    {
    }

    const backend = new StorageBackend(STORAGE_PATH)
    const state = new Memento(backend)

    console.log('=== Writing 5 keys (naive immediate flush) ===')
    console.log('Write count before:', backend.writeCount)

    await state.update('counter', 42)
    await state.update('user', {name: 'Alice', role: 'admin'})
    await state.update('tags', ['alpha', 'beta', 'gamma'])
    await state.update('enabled', true)
    await state.update('threshold', 0.85)

    console.log('Write count after:', backend.writeCount)
    console.log('')

    console.log('=== Raw file on disk ===')
    console.log(fs.readFileSync(STORAGE_PATH, 'utf-8'))
    console.log('')

    console.log('=== Simulating process restart ===')
    const backend2 = new StorageBackend(STORAGE_PATH)
    const state2 = new Memento(backend2)

    console.log('keys after restart:', state2.keys())
    console.log('counter:', state2.get('counter'))
    console.log('user:', state2.get('user'))
    console.log('tags:', state2.get('tags'))
    console.log('')

    await state2.update('tags', undefined)
    console.log('Write count for restart instance', backend2.writeCount)

    const backend3 = new StorageBackend(STORAGE_PATH)
    const state3 = new Memento(backend3)
    console.log('keys after delete + restart:', state3.keys())
    console.log('tags after delete + restart:', state3.get('tags', 'GONE'))
}

main().catch(console.error)