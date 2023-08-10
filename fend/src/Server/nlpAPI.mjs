// Environment set up
const dotenv = require('dotenv');
dotenv.config();
const path = require('path')
const express = require('express');
const app = express();
app.use(express.json())

// Global variables
const key = process.env.API_KEY;

// Post request to api
app.post('/nlpAPI', async (req, res) => {
  const {articleSnippet} = req.body;

  const options = {
    method: 'POST',
    hostname: 'api.meaningcloud.com',
    path: `/sentiment-2.1?key=${key}&txt=${articleSnippet}&lang=auto&verbose=y`,
    headers: {
      'Content-Type': 'application/json'
    },
    maxRedirects: 20
  }
  const apiUrl = `${BASE_URL}&key=${key}&txt=${articleSnippet}&lang=auto&verbose=y`;

  try {
  const response = await fetch(apiUrl, options);

  if (!response.ok) {
    throw new Error('API request failed');
  }

  const data = await response.json();
  console.log(data);
  const nlpApiResponse = {
    text: data.sentence_list[0].text,
    subjectivity: data.subjectivity,
    scoreTag: data.score_tag,
    agreement: data.agreement
  }
  console.log('Sending response from the server: ', nlpApiResponse);
  res.json(nlpApiResponse);
  } catch (error) {

  // Handle errors
  console.error('Error making request to API', error);
  res.status(500).json({ error: "Failed to fetch data from API" });
}
});