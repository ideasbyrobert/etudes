'use strict'

const path = require('path')
const fs = require('fs')
const WAL = require('./wal')

const SYNC_LOG = path.join(__dirname, '08-sync.log')
const NOSYNC_LOG = path.join(__dirname, '08-nosync.log')

function cleanup()
{
    for (const f of [SYNC_LOG, NOSYNC_LOG])
    {
        if (fs.existsSync(f))
        {
            fs.unlinkSync(f)
        }
    }
}

function benchmark(logFile, count, sync)
{
    const wal = new WAL(logFile)
    const payload = '{"op":"put","key":"bench","value:"' + 'x'.repeat(64) + '"}'

    const start = process.hrtime.bigint()

    for (let i = 0; i < count; i++)
    {
        wal.append(payload, { sync })
    }

    const elapsed = Number(process.hrtime.bigint() - start)
    wal.close()

    const totalMs = elapsed / 1e6
    const perEntryUs = elapsed / count / 1000
    const entriesPerSec = Math.round(count / (elapsed / 1e9))

    return { totalMs, perEntryUs, entriesPerSec }
}

function formatRow(label, stats)
{
    return '  ' + label.padEnd(18) + 
        String(stats.entriesPerSec).padStart(10) + ' entries/sec' +
        String(stats.perEntryUs.toFixed(1)).padStart(12) + ' µs/entry' +
        String(stats.totalMs.toFixed(1)).padStart(10) + ' ms total'
}

function main()
{
    console.log('=== The fsync Durability Boundary ===\n')
    cleanup()

    const COUNT = 1000
    const payload = '{"op":"put","key":"bench","value":"' + 'x'.repeat(64) + '"}'
    console.log('  Appending ' + COUNT + ' entries (' + payload.length + ' byte payload each)\n')

    const noSync = benchmark(NOSYNC_LOG, COUNT, false)
    console.log(formatRow('write() only:', noSync))

    const withSync = benchmark(SYNC_LOG, COUNT, true)
    console.log(formatRow('write() + fsync:', withSync))

    const ratio = Math.round(noSync.entriesPerSec / withSync.entriesPerSec)
    console.log('\n Throughput ratio (no-sync / sync): ~' + ratio + 'x')
    console.log('\n write() delivers bytes to the OS page cache (RAM).')
    console.log('  fsync() forces those bytes to the storage device (NAND flash).')
    console.log('  The ' + ratio + 'x gap is the durability tax - the cost of truth')

    cleanup()
}

main()