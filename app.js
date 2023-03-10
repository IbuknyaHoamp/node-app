// express
const express = require('express')
const app = express()

// path dan view engine
const path = require('path')
const hbs = require('hbs')

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false }))

// port
const port = 3000

// set dinamic views file
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')


// halaman home
app.get('/', (req, res) => {
    // render file index
    res.render('index', {
        name : "Thomas Setiawan"
    })
})

// route form
app.get('/form', (req,res) => {
    res.render('form')
})

// route submit form
app.post('/post', (req,res) => {
    // render file
    res.render('index', {
        // sekalian mengirim parameter input
        name : req.body.name
    })
})

// halaman about
app.get('/about', (req, res) => {
    res.send('Halaman about')
})

// running server
app.listen(port, () => {
    console.log(`Server us running at port ${port}`)
})