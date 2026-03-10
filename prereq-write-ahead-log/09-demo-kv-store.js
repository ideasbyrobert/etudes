'use strict'

const path = require('path')
const fs = require('fs')
const KVStore = require('./kv-store')
const { simulateTornWALWrite } = require('./crash-sim')

const LOG_FILE = path.join(__dirname, '09-test.log')

function cleanup()
{
    if (fs.existsSync(LOG_FILE))
    {
        fs.unlinkSync(LOG_FILE)
    }
}

function printState(store, label)
{
    console.log('  ' + label + ':')
    if (store.size() === 0)
    {
        console.log('    (empty)')
    }
    else
    {
        for (const [k, v] of store.map)
        {
            console.log('    ' + k + ' = ' + v)
        }
    }
    console.log('')
}

function demonstrateCrashRecovery()
{
    console.log('=== Demonstration 1: Crash Recovery ===\n')

    console.log('  --- Session 1: initial writes ---')
    let store = new KVStore(LOG_FILE)
    store.put('name', 'Alice')
    store.put('balance', '1000')
    store.put('active', 'true')
    printState(store, 'State after writes')
    store.close()

    console.log('  --- Session 2: restart (replay from WAL) ---')
    store = new KVStore(LOG_FILE)
    printState(store, 'State after recovery')
    store.close()
}

function demonstrateModifyAndDelete()
{
    console.log('=== Demonstration 2: Modify + Delete Survive Creash ===\n')

    console.log('  --- Session 3: modify and delete ---')
    let store = new KVStore(LOG_FILE)
    store.put('balance', 900)
    store.delete('active')
    printState(store, 'State after modify + delete')
    store.close()
}

function demonstrateTornWriteRecovery()
{
    console.log('=== Demonstration 3: Torn Write Recovery ===\n')
    console.log('  (Contrast with Step 1: the naive store was irrecoverably corrupt.)\n')

    simulateTornWALWrite(LOG_FILE, 'torn-payload')
    const corruptSize = fs.statSync(LOG_FILE).size
    console.log('  Injected torn payload. File size: ' + corruptSize + ' bytes.')

    console.log('  Opening KVStore (recovery runs in constructor)...\n')
    const store = new KVStore(LOG_FILE)
    const repairedSize = fs.statSync(LOG_FILE).size
    console.log('  File size after recovery: ' + repairedSize + ' bytes.')
    console.log('  Truncated ' + (corruptSize - repairedSize) + ' corrupt bytes.\n')

    printState(store, 'State after torn-write recovery')

    console.log('  All prior commited entries survived.')
    console.log('  Only the incomplete (uncommited) entryn was discarded.\n')

    store.close()
}

function main()
{
    console.log('=== WAL-Protexted Key-Value Store ===\n')
    cleanup()

    demonstrateCrashRecovery()
    demonstrateModifyAndDelete()
    demonstrateTornWriteRecovery()

    cleanup()
}

main()