import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// Create the Client namespace
const Client = {};

// Attach functions to the Client namespace
Client.checkForName = checkForName;
Client.handleSubmit = handleSubmit;

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get input text from form
  const inputText = document.getElementById('name-input').value;

  // Validate user input
  const isValid = checkForName(inputText);

  if (isValid) {
    // Submit form
    handleSubmit(event);
  }
});

document.addEventListener('DOMContentLoaded', function() {


  // Used chatGPT to determine how to set up proper parameters from form to
  // post to server
  document.getElementById('evaluationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const fetchData = async (url = '', data = {}) => {
      console.log(data);

      const response = await fetch('http://localhost:8080/', {
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

        const {userData, subjectivity, scoreTag, agreement} = responseData;

        document.querySelector('#results').innerText = `
        Subjectivity: ${subjectivity}
        Polarity: ${scoreTag}
        Text: ${userData}
        Agreement: ${agreement}`;

      } catch (error) {
        console.error('Error:', error.message);
        throw error;
      }
    }
    fetchData('/', userData);
  });
});

// export {
//   checkForName,
//   handleSubmit
// };