const colors = require('colors')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const consolePrefix = `${'['.blue}${'dbd-soft-ui'.yellow}${']'.blue} `

module.exports.register = async function (client, data) {
    if (client === undefined) return console.log(`${consolePrefix} ${'Client has not been specified!'.red}`)
    if (data === undefined) return console.log(consolePrefix + "No Data has been entered!");

    console.log(consolePrefix + "Log collection is " + colors.brightGreen("ACTIVE"))

    let initial = {
        title: "Bot Started",
        description: "Bot has been started!",
    }

    initial.description = `[${new Date().toLocaleString()}] ${initial.description}`

    await send(client, initial)
}

module.exports.send = async function (client, data) {
    if (client === undefined) return console.log(`${consolePrefix} ${'Client has not been specified!'.red}`)
    if (data === undefined) return console.log(consolePrefix + "No Data has been entered!");

    // Add a timestamp infront of data.description
    data.description = `[${new Date().toLocaleString()}] ${data.description}`

    let list = {
        title: data.title,
        description: data.description,
    }

    await send(client, list)
}

async function send(client, data) {

    // console.log(consolePrefix + "Sending log to dashboard URL : " + client.dlu.dashboard_url + "/stats/logs/update")
    await fetch(client.dlu.dashboard_url + "/stats/logs/update", {
        method: "post",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + client.dlu.key }
    }).catch(err => console.log(err))
}