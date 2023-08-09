const path = require('path')
const express = require('express')
const nlpAPIResponse = require('./nlpAPI.js')
const cors = require('cors')
const dotenv = require('dotenv')
const port = process.env.PORT || 8080;

dotenv.config();
const app = express()
app.use(express.static('dist'))
app.use(cors());
app.use(express.json());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/nlpAPI', function (req, res) {
    res.send(nlpAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});