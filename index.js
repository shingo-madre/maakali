const express = require('express')
const cors = require('cors')
const path = require('path')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public/views'))

app.use(express.static(__dirname + '/public'))

app.use('/', (req, res) => {
    res.render('index')
})

app.listen(process.env.port, () => {
    console.log(`App is live on http://localhost:${process.env.port}`)
})