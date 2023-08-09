const articleChecker = require('./articleChecker');

  checkIfBrowser();
  // checkIfNode();

  // Check functions when working with node.js
  // Learned from this site:
  // https://stackdiary.com/tutorials/referenceerror-document-is-not-defined/#:~:text=The%20%22ReferenceError%3A%20document%20is%20not,such%20as%20in%20a%20Node.
  // Based on search about this error:
  // ReferenceError: document is not defined in JavaScript
  function checkIfBrowser() {
    if (typeof window === "object") { console.log('running in browser'); } else { console.log('not running in browser'); }
  }

  // function checkIfNode() {
  //   if (process.browser) {
  //     console.log('Not Node');
  //   } else {
  //     console.log('Yes, Node');
  //   }
  // }
  // Current result of above checks: running in the browser

  function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article').value
    checkForArticle(formText)

    console.log("::: Form Submitted :::")
    //   fetch('http://localhost:8080/nlpAPI')
    //   .then(res => res.json())
    //   .then(function(res) {
    //       document.getElementById('results').innerHTML = res.message
    //   })
    // }

    // Used chatGPT to determine how to set up proper parameters from form to
    // post to server
    document.getElementById('evaluationForm').addEventListener('submit', async (e) => {
      e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const fetchData = async (url = '', data = {}) => {
      console.log(data);

      const response = await fetch('http://localhost:8080/nlpAPI', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      try {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const responseData = await response.json();
        console.log(responseData);
        // return responseData;

        const {text, subjectivity, scoreTag, agreement} = responseData;

        document.querySelector('#results').innerText = `
        Text submitted: ${text}
        Polarity: ${scoreTag}
        Subjectivity: ${subjectivity}
        Agreement: ${agreement}`;

      } catch (error) {
        console.error('Error:', error.message);
        throw error;
      }
    }
    fetchData('/', userData);
  });
};

