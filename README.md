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
        dashboard_url: 'YOURURLHERE',
        key: 'YOURKEYHERE'
    })
})

process.on('unhandledRejection', (reason, p) => {
  DLU.send(client, {
    dashboard_url: 'YOURURLHERE',
    title: 'Unhandled Rejection',
    description: reason,
    key: 'YOURKEYHERE'
  })
})
```

**Make sure to replace the values in the code with your own**

## Usage

Once installed you can access the UI by going to the Admin Panel.

## License
MIT

See [License](LICENSE.md) for more information.

## Contributing

If you think this project could be improved, or you found a bug, feel free to create an issue or a pull request.

## Release Notes

### 1.0.0

- Initial release

[Full Changelog](CHANGELOG.md)

---

**Enjoy**