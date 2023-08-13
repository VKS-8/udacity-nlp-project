const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = 8080;

// Start an instance of the express app; must be above the app.use expressions
const app = express();

// Object to store data
let projectData = {
  "server": "Can you see me?"
};

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Entry point
app.use(express.static('dist'))

// Set the appropriate MIME type for .scss files
app.use('*.scss', (req, res, next) => {
  res.type('text/css');
  next();
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Global variables
const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?';

// TODO move to a test module if it's really needed
// This hard coded api url does fetch the sentiment data object from meaningcloud api
// async function getData () {
//   const response = await fetch(`${baseUrl}txt=I'm so glad to see you!&lang=auto&verbose=y&key=${apiKey}`);
//   const testData = await response.json();
  // console.log(testData);
// }
// Test api with hard coded params
// getData();

app.post('/', async (req, res) => {
  console.log(req.body);
  const {input} = req.body;

  // Add params to projectData object
  // projectData.text = input;

  const apiUrl = `${baseUrl}txt=${encodeURIComponent(input)}&lang=auto&verbose=y&key=${apiKey}`;

  try {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error('API request failed');
  }

  const data = await response.json();
  // console.log(data);

  // const responseData = {
  //   text: data.text,
  //   subjectivity: data.subjectivity,
  //   polarity: data.sentence_list[0].score_tag,
  //   agreement: data.sentence_list[0].agreement,
  // }
  console.log('Sending response from the server: ', data);
  res.json(data);
  } catch (error) {
    // Handle errors
  console.error('Error making request to API', error);
  res.status(500).json({ error: "Failed to fetch data from API" });
  }
});

// designates what port the app will listen to for incoming requests
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});