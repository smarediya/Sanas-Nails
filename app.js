const express = require('express')
const app = express()
const port = 8000


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/appointments', (req, res) => {
    res.render('appointments')
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio')
})


app.listen(port, () => console.info(`Listening on port ${port}`))