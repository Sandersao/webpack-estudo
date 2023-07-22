const path = require('path')
const express = require('express')
const app = express()

module.exports = (port) => {
    app
        .use(express
            .static(
                path.join(__dirname, '..', 'dist')
            )
        )
    app
        .listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
}