const colors = require('colors')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const consolePrefix = `${'['.blue}${'dbd-soft-ui'.yellow}${']'.blue} `

module.exports.register = async function (client, data) {
    if (client === undefined) return console.log(`${consolePrefix} ${'Client has not been specified!'.red}`)
    if (data === undefined) return console.log(consolePrefix + "No Data has been entered!");

    client.dlu = {
        key: data.key,
        dashboard_url: data.dashboard_url,
    }

    console.log(consolePrefix + "Log collection is " + colors.brightGreen("ACTIVE"))

    await send(client, {
        title: "Bot Started",
        description: `[${new Date().toLocaleString()}] Log collection is ACTIVE and sends to ${client.dlu.dashboard_url}`,
    })
}

module.exports.send = async function (client, data) {
    if (client === undefined) return console.log(`${consolePrefix} ${'Client has not been specified!'.red}`)
    if (data === undefined) return console.log(consolePrefix + "No Data has been entered!");

    await send(client, {
        title: data.title,
        description: `[${new Date().toLocaleString()}] ${data.description}`,
    })
}

async function send(client, data) {
    await fetch(client.dlu.dashboard_url + "/stats/logs/update", {
        method: "post",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + client.dlu.key }
    }).catch(err => console.log(err))
}