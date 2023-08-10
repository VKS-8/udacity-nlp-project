const express = require('express')
const dataCentral = require('./dataCentral.mjs')
const cors = require('cors')
const port = process.env.PORT || 8080;

const app = express()
app.use(express.static('dist'))
app.use(cors());
app.use(express.json());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/', function (req, res) {
    res.send(dataCentral)
})

// designates what port the app will listen to for incoming requests
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});