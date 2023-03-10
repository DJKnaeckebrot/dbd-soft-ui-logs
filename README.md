# dbd-soft-ui-logs

This is a simple UI for viewing logs from the [dbd-soft-ui](https://github.com/Assistants-Center/DBD-Soft-UI)

## Installation

1. Run ```npm install dbd-soft-ui-logs``` in your bots project
2. Enable the function in the themeConfig of your [dbd-soft-ui](https://github.com/Assistants-Center/DBD-Soft-UI)
```js
   theme: SoftUI({
    admin: {
        backgroundUrl: "https://t3.ftcdn.net/jpg/03/44/67/38/360_F_344673825_6fU6IORyipkYpfU1mg2vmxtHxDToUO6Q.jpg",
        pterodactyl: {
            enabled: false,
            apiKey: "apiKey",
            panelLink: "https://panel.website.com",
            serverUUIDs: [],
        },
        logs: {
            enabled: true,
            key: "YOURKEYHERE",
        }
    },
   },
```
3. Add the following into your bots main file
```js
const DLU = require('dbd-soft-ui-logs')

client.on('ready', () => {
    DLU.register(client, {
        key: 'YOURKEYHERE',
        dashboard_url: 'YOURURLHERE'
    })
})

process.on('unhandledRejection', (reason, p) => {
  DLU.send(client, {
    description: reason,
  })
})
```

**Make sure to replace the values in the code with your own**

You can use the send function to send any log you want to be shown in the Soft UI.

## Usage

Once installed you can access the UI by going to the Admin Panel.

## License
MIT

See [License](LICENSE.md) for more information.

## Contributing

If you think this project could be improved, or you found a bug, feel free to create an issue or a pull request.

## Release Notes

## [1.1.1]

- Removed a bug with sending data
- Merged PR #1

[Full Changelog](CHANGELOG.md)

---

**Enjoy**