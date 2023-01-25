const colors = require('colors')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const consolePrefix = `${'['.blue}${'dbd-soft-ui'.yellow}${']'.blue} `

module.exports.register = async function (client) {
    if (client === undefined) return console.log(`${consolePrefix} ${'Client has not been specified!'.red}`)

    console.log(consolePrefix + "Log collection is " + colors.brightGreen("ACTIVE"))
}

module.exports.send = async function (client, data) {
    if (client === undefined) return console.log(`${consolePrefix} ${'Client has not been specified!'.red}`)
    if (data === undefined || data.hasOwnProperty("key") === false || data.hasOwnProperty("dashboard_url") === false) return console.log(consolePrefix + "The endpoint information has not been entered!");

    // Add a timestamp infront of data.description
    data.description = `[${new Date().toLocaleString()}] ${data.description}`

    async function submitStats(data) {
        console.log(consolePrefix + "Sending log to the dashboard..." + data.title + " " + data.description + " " + data.dashboard_url + " " + data.key)

        let list = {
            title: data.title,
            description: data.description,
        }

        console.log(consolePrefix + "Log to be sent to the dashboard: " + data.dashboard_url + "/stats/logs/update" + " : " + list.title + " : " + list.description);

        await fetch(data.dashboard_url + "/stats/logs/update", {
            method: "post",
            body: JSON.stringify(list),
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + data.key }
        }).catch(err => console.log(err))

        console.log(consolePrefix + "Log has been sent to the dashboard!")
    }

    submitStats(data)
}