// TODO set up a function that validates the user's input onBlur before submitting
// Look back at your simple interest calc to see what you put in the html for this
// type of action

const validateInput = document.querySelector('#evaluationForm').addEventListener('onBlur', () => {
  const userInput = document.getElementById('article');

  console.log("::: Running checkForArticle :::", userInput);

  if (userInput === null) {
  // Stop if input is null
    return false;
  }

  const articleValue = userInput.value.trim();

  if (articleValue === '') {
    alert('Please enter a valid article snippet.'); // Alert user to enter an input
    userInput.focus(); // Set focus back to input field and wait for valid input
    return false;  // Return false if input is invalid
  } else {
    // TODO set up a switch statement for this that determines input type and sends to userInput object
    // How do I really need to check for input type, store, and retrieve this data in an object
    // component efficiently?  What is actually necessary? 
    userInput.finalInput = articleValue; // Store data as an object
    return true;
  }

})



validateInput(); // Do I need to pass in userInput?

export { validateInput };
