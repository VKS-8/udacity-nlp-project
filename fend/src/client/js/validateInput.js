function validateInput() {
  const articleInput = document.getElementById('article');

  if (articleInput === null) {
    // Stop if input is null
    return;
  }

  const articleValue = articleInput.value.trim();

  if (articleValue === '') {
    alert('Please enter a valid article url or snippet.'); // Alert user to enter an input
    articleInput.focus(); // Set focus back to input field and wait for valid input
  } else {
    alert('Thank you for your article submission');
    return true;
  }
}

export { validateInput }