'use strict'

const path = require('path')
const fs = require('fs')
const { ExtensionHostStorage } = require('./extension-host-storage')

const STORAGE_PATH = path.join(__dirname, 'data', 'globalState.json')

function clean()
{
    try
    {
        fs.unlinkSync(STORAGE_PATH)
    }
    catch(e)
    {
    }
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function main()
{
    console.log('=== Test 1: Debounced Batching ===')
    clean()

    const host = new ExtensionHostStorage(STORAGE_PATH, 50)
    const extA = host.getMemento('acme.todo-manager')
    const extB = host.getMemento('contoso.analytics')

    const promises = []
    for (let i = 0; i < 5; i++)
    {
        promises.push(extA.update(`key-${i}`, `value-a-${i}`))
        promises.push(extB.update(`key-${i}`, `value-b-${i}`))
    }

    console.log('10 updates fired. Flush count so far:', host.scheduler.flushCount)
    console.log('File writes so far:', host.backend.writeCount)
    
    await Promise.all(promises)

    console.log('All promises resolved.')
    console.log('Flush count:', host.scheduler.flushCount)
    console.log('File writes:', host.backend.writeCount)
    console.log('')

    const raw = fs.readFileSync(STORAGE_PATH, 'utf-8')
    const parsed = JSON.parse(raw)
    console.log('extA keys on disk:', Object.keys(parsed['acme.todo-manager'] || {}))
    console.log('extB keys on disk:', Object.keys(parsed['contoso.analytics'] || {}))
    console.log('')

    console.log('=== Test 2: Promise Semantics ===')
    clean()

    const host2 = new ExtensionHostStorage(STORAGE_PATH, 50)
    const ext = host2.getMemento('acme.todo-manager')

    let promiseResolved = false
    const p = ext.update('timing', 'test').then(() => {
        promiseResolved = true
    })

    console.log('Immediately after update(): promiseResolved =', promiseResolved)
    console.log('File writes:', host2.backend.writeCount)
    console.log('')

    console.log('=== Test 3: Concurrent Writes Are Now Safe ===')
    clean()

    const host3 = new ExtensionHostStorage(STORAGE_PATH, 50)
    const raceA = host3.getMemento('acme.todo-manager')
    const raceB = host3.getMemento('contoso.analytics')

    const pA = raceA.update('data', 'from-extension-A')
    const pB = raceB.update('data', 'from-extension-B')

    await Promise.all([pA, pB])

    const afterRace = JSON.parse(fs.readFileSync(STORAGE_PATH, 'utf-8'))
    const aPresent = afterRace['acme.todo-manager'] && afterRace['acme.todo-manager']['data'] === 'from-extension-A'
    const bPresent = afterRace['contoso.analytics'] && afterRace['contoso.analytics']['data'] === 'from-extension-B'

    console.log('extA data on disk:', aPresent ? 'PRESENT' : 'LOST')
    console.log('extB data on disk:', bPresent ? 'PRESENT' : 'LOST')
    console.log('File writes:', host3.backend.writeCount)

    if (aPresent && bPresent)
    {
        console.log('')
        console.log('Both extension\'s data survived concurrent writes.')
        console.log('The cenralized store + debounced flush eliminated the race.')
    }
    console.log('')

    console.log('=== Test 4: Separate Batches Across Windows ===')
    clean()

    const host4 = new ExtensionHostStorage(STORAGE_PATH, 50)
    const batchExt = host4.getMemento('acme.todo-manager')

    const batch1 = []
    batch1.push(batchExt.update('a', 1))
    batch1.push(batchExt.update('b', 2))
    batch1.push(batchExt.update('c', 3))
    await Promise.all(batch1)

    console.log('After batch 1 - flush count:', host4.scheduler.flushCount, '  file writes:', host4.backend.writeCount)

    await sleep(100)

    const batch2 = []
    batch2.push(batchExt.update('d', 4))
    batch2.push(batchExt.update('e', 5))
    batch2.push(batchExt.update('f', 6))
    await Promise.all(batch2)

    console.log('After batch 2 - flush count:', host4.scheduler.flushCount, ' file writes:', host4.backend.writeCount)
    console.log('')
    console.log('6 total updates across debounce windows = 2 file writes')
}

main().catch(console.error)