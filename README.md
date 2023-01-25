# dbd-soft-ui-logs

This is a simple UI for viewing logs from the [dbd-soft-ui](https://github.com/Assistants-Center/DBD-Soft-UI)

## Installation

1. Run ```npm install dbd-soft-ui-logs``` in your bots project
2. Enable the function in the themeConfig of your [dbd-soft-ui](https://github.com/Assistants-Center/DBD-Soft-UI)
```js
   theme: SoftUI({
    logspage: {
        enabled: true,
        key: "YOURKEYHERE",
    },
   },
```
3. Add the following into your bots main file
```js
const DLU = require('dbd-soft-ui-logs')

client.on('ready', () => {
  DLU.register(client)
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