const express = require('express')
const path = require('./path')

const app = express()

module.exports = (port) => {
    app
        .use(
            express
                .static(path.fix('dist'))
        )
    app
        .listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
}