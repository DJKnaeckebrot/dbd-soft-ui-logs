const colors = require('colors')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const consolePrefix = `${'['.blue}${'dbd-soft-ui'.yellow}${']'.blue} `

module.exports.register = async function (client, data) {
    if (client === undefined) return console.log(`${consolePrefix} ${'Client has not been specified!'.red}`)
    if (data === undefined || data.hasOwnProperty("key") === false || data.hasOwnProperty("dashboard_url") === false) return console.log(consolePrefix + "The endpoint information has not been entered!");

    console.log(consolePrefix + "Log collection is " + colors.brightGreen("ACTIVE"))

    let initial = {
        title: "Bot Started",
        description: "Bot has been started!",
    }

    initial.description = `[${new Date().toLocaleString()}] ${initial.description}`

    await fetch(data.dashboard_url + "/stats/logs/update", {
        method: "post",
        body: JSON.stringify(initial),
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + data.key }
    }).catch(err => console.log(err))
}

module.exports.send = async function (client, data) {
    if (client === undefined) return console.log(`${consolePrefix} ${'Client has not been specified!'.red}`)
    if (data === undefined || data.hasOwnProperty("key") === false || data.hasOwnProperty("dashboard_url") === false) return console.log(consolePrefix + "The endpoint information has not been entered!");

    // Add a timestamp infront of data.description
    data.description = `[${new Date().toLocaleString()}] ${data.description}`

    async function submitStats(data) {

        let list = {
            title: data.title,
            description: data.description,
        }

        await fetch(data.dashboard_url + "/stats/logs/update", {
            method: "post",
            body: JSON.stringify(list),
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + data.key }
        }).catch(err => console.log(err))
    }
    submitStats(data)
}