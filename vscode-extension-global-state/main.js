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

async function main()
{
    console.log('=== Sync Registry Basics ===')
    clean()

    const host = new ExtensionHostStorage(STORAGE_PATH, 50)
    const extA = host.getMemento('acme.todo-manager')
    const extB = host.getMemento('contoso.analytics')

    const promises = []

    promises.push(extA.update('count', 42))
    promises.push(extA.update('label', 'My Tasks'))
    promises.push(extA.update('theme', 'dark'))
    promises.push(extA.update('lastSync', '2026-03-01'))
    promises.push(extA.update('apiToken', 'secret-abc-123'))
    promises.push(extB.update('endpoint', 'https://api.contoso.com'))
    promises.push(extB.update('sessionId', 'sess-xyz'))

    await Promise.all(promises)

    extA.setKeysForSync(['count', 'theme'])
    extB.setKeysForSync(['endpoint'])

    const payload = host.getSyncData()
    console.log('Full sync payload across all extensions:')
    console.log(JSON.stringify(payload, null, 2))
    console.log('')
}
main().catch(console.error)