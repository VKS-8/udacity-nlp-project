let projectData = {
  formText: ''
}

function validateInput() {

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
    projectData.formText = articleValue; // Store data as an object
    return true;
  }
}

export { validateInput };
export { projectData };