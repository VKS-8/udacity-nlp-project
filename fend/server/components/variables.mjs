// https://www.meaningcloud.com/developer/sentiment-analysis/dev-tools/2.1
// This is their suggestions for setting up the options
// API credentials
export const nlpAPI = new meaningCloud ({
  application_key: process.env.API_KEY,
  options: {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `'/sentiment-2.1?key=${application_key}&lang=auto&txt=${userInput.finalInput}&verbose=y'`,
    'header': {
    },
    'maxRedirects': 20
  }
});

export const userInput = {
  text: '',
  url: '',
  document: '',
  finalInput: ''
}

// export { nlpAPI };
// export { userInput };