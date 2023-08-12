const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = 8080;

// Start an instance of the express app; must be above the app.use expressions
const app = express();

let projectData = {
  "server": "can you see me?"
};

// app.use(express()); COMMENTED this out because chatGPT said the following so testing:
// Remove the app.use(express()); line:
// The express() function returns an instance of the Express application, so you don't need to use it again with app.use().

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))

// Set the appropriate MIME type for .scss files
app.use('*.scss', (req, res, next) => {
  res.type('text/css');
  next();
});

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Global variables
const apiKey = process.env.API_KEY;
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?';

// This hard coded api url does fetch the weather data object from open weather map
async function getData () {
  const response = await fetch(`${baseUrl}txt=I've been waiting for you!&lang=auto&verbose=y&key=${apiKey}`);
  const responseData = await response.json();
  console.log(responseData);
  return responseData;
}

// Test api with hard coded params
getData();

app.get('/', (req, res) => {
  res.send('Home Page!')
})

app.get('/fend', (req, res) => {
  res.send('Welcome to your server');
});

app.post('/', async (req, res) => {
  const {userData} = req.body;

  // Add params to projectData object
  projectData.text = userData;

  const apiUrl = `${baseUrl}txt=${project.text}&lang=auto&verbose=y&key=${apiKey}`;

  try {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error('API request failed');
  }

  const data = await response.json();
  console.log(data);
    projectData.subjectivity = data.subjectivity;
    projectData.polarity = data.sentence_list[0].score_tag;
    projectData.agreement = data.sentence_list[0].agreement;
  console.log('Sending response from the server: ', projectData);
  res.json(projectData);
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