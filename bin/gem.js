#!/usr/bin/env node

let commander = require('commander')

let GEMS = {
    // 舍利子
    'slz': {
        name: '舍利子',
        unit_price: 7.5
    },

    // 红玛瑙
    'hmn': {
        name: '红玛瑙',
        unit_price: 8
    },

    // 黑宝石
    'hbs': {
        name: '黑宝石',
        unit_price: 8.5
    },

    // 光芒石
    'gms': {
        name: '光芒石',
        unit_price: 4.5
    },

    // 月亮石
    'yls': {
        name: '月亮石',
        unit_price: 8.5
    },

    // 太阳石
    'tys': {
        name: '太阳石',
        unit_price: 4
    },
}

let param = {
    name: '',
    level: 1
}

commander
    .version('0.0.1')
    .option('-k, --key <key>', 'gem key')
    .option('-l, --level <level>', 'gem level')
    .parse(process.argv)

let key = commander.key
let level = commander.level

if (!key) {
    console.log('missing gem key')
    process.exit(0)
}

if (!level) {
    console.log('missing gem level')
    process.exit(0)
}

let gem = GEMS[key]

if (!gem) {
    console.log('unsupport gem key')
    process.exit(0)
}

console.log(gem)

console.log(`
name: ${gem.name}, level: ${level}, unit price: ${gem.unit_price}
total: ${gem.unit_price * Math.pow(2, level - 1)}
`)



// commander
//     .command('calc')
//     .description('calc price for mhxy gems')
//     .action(() => {
//         console.log(commander.name)
//     })

