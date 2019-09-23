const app = require('./app')()

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/mobile', (req, res) => {
    res.render('index-mobile')
})

app.listen(8080, () => {
    console.log('Listening at 8080')
});