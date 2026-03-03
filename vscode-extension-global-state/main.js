'use strict'

const path = require('path')
const fs = require('fs')
const { ExtensionHostStorage } = require('./extension-host-storage')

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

    const host = new ExtensionHostStorage(STORAGE_PATH)

    const extA = host.getMemento('acmd.todo-manager')
    const extB = host.getMemento('contoso.analytics')

    console.log('=== Namespace Isolation Test ===')
    await extA.update('count', 7)
    await extA.update('label', 'My Tasks')
    await extB.update('count', 99999)
    await extB.update('endpoint', 'https://api.contoso.com')

    console.log('extA count:', extA.get('count'))
    console.log('extB count:', extB.get('count'))
    console.log('extA keys:', extA.keys())
    console.log('extB keys:', extB.keys())
    console.log('')

    console.log('=== Raw JSON on disk ===')
    console.log(fs.readFileSync(STORAGE_PATH, 'utf-8'))
    console.log('')

    console.log('=== After restart ===')
    const host2 = new ExtensionHostStorage(STORAGE_PATH)
    const extA2 = host2.getMemento('acme.todo-manager')
    const extB2 = host2.getMemento('contoso.analytics')

    console.log('extA count:', extA2.get('count'))
    console.log('extB count:', extB2.get('count'))
    console.log('')

    console.log('=== Write Storm: Interleaved Updates ===')
    try
    {
        fs.unlinkSync(STORAGE_PATH)
    }
    catch(e)
    {
    }

    const host3 = new ExtensionHostStorage(STORAGE_PATH)
    const stormA = host3.getMemento('acme.todo-manager')
    const stormB = host3.getMemento('contoso.analytics')

    for (let i = 0; i < 5; i++)
    {
        await stormA.update(`key-${i}`, `value-a-${i}`)
        await stormB.update(`key-${i}`, `value-b-${i}`)
    }

    console.log('Write count after 10 interleaved updates:', host3.backend.writeCount)
    console.log('')
    console.log('Each update triggered a full file rewrite')
    console.log('Every write serialized BOTH extensions, not just the one that changed.')

    console.log('=== Race Condition: Concurrent Writes Without Await ===')
    try
    {
        fs.unlinkSync(STORAGE_PATH)
    }
    catch
    {
    }

    const host4 = new ExtensionHostStorage(STORAGE_PATH)
    const raceA = host4.getMemento('acme.todo-manager')
    const raceB = host4.getMemento('contoso.analytics')

    await raceA.update('baseline', 'a-exists')
    await raceB.update('baseline', 'b-exists')

    console.log('Before race - file on disk:')
    console.log(fs.readFileSync(STORAGE_PATH, 'utf-8'))
    console.log('')

    let promiseA, promiseB
    try
    {
        promiseA = raceA.update('after-race', 'a-wrote-this')
        promiseB = raceB.update('after-race', 'b-wrote-this')
    }
    catch(err)
    {
        console.log('')
        console.log('CORRUPTION DURING FLUSH', `${err.constructor.name}:${err.message}`)
        console.log('')
        console.log('what happened:')
        console.log('  1. raceA.update() called _flush() -> load() read the file -> save() fired writeFile()')
        console.log('  2. raceB.update() called _flush() -> load() tried readFileSync()')
        console.log('  3. raceA\'s writeFile() was still in-flight - the file was partially written')
        console.log('  4. readFileSync read truncated JSON -> JSON.parse threw SyntaxError')
        console.log('')
        console.log('This is not data loss. This is STORE CORRUPTION.')
        console.log('Two independent extensions, each calling update() exactly once,')
        console.log('destroyed the entire shared storage file')

        try 
        {
            const raw = fs.readFileSync(STORAGE_PATH, 'utf-8')
            console.log('')
            console.log('File contents after corruption:')
            console.log(JSON.stringify(raw))
        }
        catch(e)
        {
        }

        return
    }

    await Promise.all([promiseA, promiseB])

    console.log('')
    console.log('After race - raw file bytes on disk:')
    let fileAfterRace
    try
    {
        fileAfterRace = fs.readFileSync(STORAGE_PATH, 'utf-8')
        console.log(fileAfterRace)
    }
    catch(e)
    {
        console.log('FILE UNREADABLE:', e.message)
        return
    }

    let parsed
    try
    {
        parsed = JSON.parse(fileAfterRace)
    }
    catch(e)
    {
        console.log('FILE CORRUPTION CONFIRMED: JSON is unparseable.')
        console.log('Two concurrent fs.writeFile() calls interleaved their bytes.')
        console.log('This is worse than data loss - the entire store is destroyed.')
        return
    }

    const aHasKey = parsed['acme.todo-manager'] && 'after-race' in parsed['acme.todo-manager']
    const bHasKey = parsed['contoso.analytics'] && 'after-race' in parsed['contoso.analytics']

    console.log('extA "after-race" on disk:', aHasKey ? 'PRESENT' : 'LOST')
    console.log('extB "after-race" on disk:', bHasKey ? 'PRESENT' : 'LOST')

    if(!aHasKey || !bHasKey)
    {
        console.log('DATA LOSS CONFIRMED: One extension\'s write was silently overwritten.')
        console.log('The last writer\'s flush() obliterated the first writer\'s data.')
    }
    else
    {
        console.log('No data loss observed this run. The race is timing-dependent.')
        console.log('In production with real I/O latency, the window is much wider.')
    }
}

main().catch(console.error)