const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
app.use(express.json())

// Global variables
const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1/';
const key = process.env.API_KEY;

app.post('/nlpAPI', async (req, res) => {
  const {codeSnippet} = req.body;

  const apiUrl = `${BASE_URL}&key=${key}&txt=${codeSnippet}&lang=auto&verbose=y`;

  try {
  const response = await fetch(apiUrl);

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