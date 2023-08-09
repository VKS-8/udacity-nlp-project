require('dotenv').config;

// Global variables
const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1';
const key = process.env.API_KEY;

app.post('/', async (req, res) => {
  const {formText} = req.body;

  // Add params to projectData object
  projectData.formText = formText;

  console.log(projectData);

  const apiUrl = `${BASE_URL}&key=${key}&txt=${projectData.formText}&url=${projectData.formText}&doc=${projectData.formText}&lang=auto&verbose=y`;

  try {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error('API request failed');
  }

  const data = await response.json();
  console.log(data);
    projectData.text = data.sentence_list[0].text;
    projectData.subjectivity = data.subjectivity;
    projectData.scoreTag = data.score_tag;
    projectData.agreement = data.agreement;
  console.log('Sending response from the server: ', projectData);
  res.json(projectData);
  } catch (error) {

  // Handle errors
  console.error('Error making request to API', error);
  res.status(500).json({ error: "Failed to fetch data from API" });
}
});

// 404 page per this YouTube tutorial:
// https://www.youtube.com/watch?v=Lr9WUkeYSA8&t=624s
// The Net Ninja
// Node.js Crash Course #6 - Express Apps
app.use((req, res) => {
  res.status(404).sendFile('./website/404.html', { root: __dirname});
});