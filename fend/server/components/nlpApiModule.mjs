import nlpAPI from './dataObjects.mjs';
import userInput from './dataObjects.mjs';

const formdata = new FormData();
formdata.append("key", `"${nlpAPI.application_key}"`);
formdata.append("txt", `"${userInput}"`);
formdata.append("lang", "auto");  // 2-letter code, like en es fr ...
formdata.append("verbose", "y");

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response => ({
    status: response.status,
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));