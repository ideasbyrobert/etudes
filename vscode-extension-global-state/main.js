'use strict'

const { Momento } = require('./momento')

async function main()
{
    const state = new Momento()

    await state.update('counter', 42)
    await state.update('user', {name: 'Alice', role: 'admin'})
    await state.update('tags', ['alpha', 'beta', 'gamma'])
    await state.update('enabled', true)

    console.log('counter:', state.get('counter'))
    console.log('user:', state.get('user'))
    console.log('tags:', state.get('tags'))
    console.log('enabled', state.get('enabled'))

    console.log('missing (no default):', state.get('nonexistent'))
    console.log('missing (with default):', state.get('nonexistent', 'fallback'))

    console.log('keys:', state.keys())

    await state.update('tags', undefined)
    console.log('keys after delete:', state.keys())
    console.log('tags after delete:', state.get('tags', 'GONE'))

    const result = state.update('test', 'abc')
    console.log('update() returns', result)
    console.log('update() is thenable:', typeof result.then === 'function')
}

main().catch(console.error)