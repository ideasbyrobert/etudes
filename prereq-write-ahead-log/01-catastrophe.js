'use strict'

const path = require('path')
const fs = require('fs')
const NaiveKVStore = require('./naive-kv-store')
const { simulateCrashDuringWrite } = require('./crash-sim')

const DATA_FILE = path.join(__dirname, '01-data.json')

function demonstrateRewritePenalty()
{
    console.log('=== Demonstration 1: The O(N) Rewrite Penalty ===\n')

    const store = new NaiveKVStore(DATA_FILE)
    const scales = [100, 1000, 10000]
    const UPDATES = 50

    for (const n of scales)
    {
        store.destroy()

        const seed = {}
        for (let i = 0; i < n; i++)
        {
            seed['key-' + i] = 'value-' + i
        }
        store.seed(seed)

        const size = store.fileSize()
        const start = process.hrtime.bigint()

        for (let u = 0; u < UPDATES; u++)
        {
            store.put('key-' + Math.floor(Math.random() * n), 'updated-' + u)
        }

        const elapsed = Number(process.hrtime.bigint() - start)
        const usPerUpdate = (elapsed / UPDATES / 1000).toFixed(1)

        console.log(
            ' ' + String(n).padStart(6) + ' entries | ' +
            'file: ' + String(size).padStart(9) + ' bytes | ' +
            usPerUpdate + ' µs/update'
        )
    }

    store.destroy()
}

function demonstrateCrashCorruption()
{
    console.log('\n=== Demonstration 2: The Crash Corruption Hole ===\n')

    const store = new NaiveKVStore(DATA_FILE)
    store.destroy()

    store.seed({ name: 'Alice', balance: 1000, active: true })
    console.log('  Before crash:')
    console.log('    ' + fs.readFileSync(DATA_FILE, 'utf8'))

    const newContent = JSON.stringify({ name: 'Alice', balance: 900, active: true })
    simulateCrashDuringWrite(DATA_FILE, newContent, 0.33)

    console.log('\n After crash (truncate + partial write):')
    const raw = fs.readFileSync(DATA_FILE, 'utf8')
    console.log('    Raw: ' + JSON.stringify(raw))

    try
    {
        JSON.parse(raw)
        console.log('    Parse succeeded - adjust fraction.')
    }
    catch(e)
    {
        console.log('    JSON.parse() threw: ' + e.message)
        console.log('\n *** Irrecoverably corrupt. Neither old nor new state survived. ***')
    }

    store.destroy()
}

function main()
{
    demonstrateRewritePenalty()
    demonstrateCrashCorruption()
}

main()