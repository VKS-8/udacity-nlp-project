const path = require('path')
const express = require('express')
const nlpAPIResponse = require('./nlpAPI.js')
const dotenv = require('dotenv')
dotenv.config();

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('NLP project app listening on port 8080!')
})

app.get('/nlp', function (req, res) {
    res.send(nlpAPIResponse)
})