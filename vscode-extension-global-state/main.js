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
}

main().catch(console.error)