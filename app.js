const express = require('express')

module.exports = () => {
    const app = express()
    app.set('view engine', 'pug')
    app.set('views', './views')
    app.use('/statics', express.static('./statics'))
    return app
}
