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

    const host = new ExtensionHostStorage(STORAGE_PATH, 50)
    const extA = host.getMemento('acme.todo-manager')
    const extB = host.getMemento('contoso.analytics')

    extA.setKeysForSync(['count'])
    extB.setKeysForSync(['endpoint'])

    const events = []
    const syncSnapshots = []
    let writeCountAtLastEvent = -1

    const dispose = host.onDidChangeStorage((event) => {
        events.push(event)
        writeCountAtLastEvent = host.backend.writeCount

        const memento = host.getMemento(event.extensionId)
        if(memento.keysForSync.includes(event.key))
        {
            syncSnapshots.push(host.getSyncData())
        }
    })

    const promises = []
    promises.push(extA.update('count', 42))
    promises.push(extA.update('label', 'Tasks'))
    promises.push(extA.update('count', 99))
    promises.push(extB.update('endpoint', 'https://api.contoso.com'))
    promises.push(extA.update('count', 111))
    await Promise.all(promises)

    console.log('Events received:', events.length)
    for (const e of events)
        console.log(`  ${e.extensionId} -> "${e.key}" = ${JSON.stringify(e.value)}`)

    console.log('')
    console.log('Sync triggered', syncSnapshots.length, 'times (only on synced "count":')
    for (const s of syncSnapshots)
        console.log(' ', JSON.stringify(s))

    console.log('')
    console.log('Write count when last event fired:', writeCountAtLastEvent)
    console.log('Write count now:', host.backend.writeCount)
    console.log('Each event fires before its own flush completes - listeners see in-memory state, not disk.')

    console.log('')
    const countBefore = events.length
    dispose()
    await extA.update('count', 999)
    console.log('Events after dispose:', events.length, '(unchanged from', countBefore + ')')
}
main().catch(console.error)