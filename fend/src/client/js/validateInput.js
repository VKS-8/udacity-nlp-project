function validateInput() {
  const articleInput = document.getElementById('article');

  if (articleInput === null) {
  // Stop if input is null
    return false;
  }

  const articleValue = articleInput.value.trim();

  if (articleValue === '') {
    alert('Please enter a valid article url or snippet.'); // Alert user to enter an input
    articleInput.focus(); // Set focus back to input field and wait for valid input
    return false;  // Return false if input is invalid
  } else {
    projectData.push({formText, articleInput}); // Store data as an object
    return true;
  }
}

export { validateInput };