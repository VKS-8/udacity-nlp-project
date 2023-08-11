// https://www.meaningcloud.com/developer/sentiment-analysis/dev-tools/2.1
// API credentials
const nlpAPI = new meaningCloud ({
  application_key: process.env.API_KEY,
  options: {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `'/sentiment-2.1?key=${application_key}&lang=auto&txt=${articleSnippet}&verbose=y'`,
    'path': `'/sentiment-2.1?key=${application_key}&lang=auto&url=${articleURL}&verbose=y'`,
    'path': `'/sentiment-2.1?key=${application_key}&lang=auto&txt=${document}&verbose=y'`,
    'header': {
    },
    'maxRedirects': 20
  }
});

const userInput = {
  text: '',
  url: '',
  document: ''
}

export { nlpAPI };
export { userInput };