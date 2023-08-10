function validateInput() {

  const userInput = document.getElementById('article');
  const isValid = '';

  console.log("::: Running validate user input :::", userInput);

  if (userInput === null) {
  // Stop if input is null
    return isValid = false;
  }

  const userInputValue = userInput.value.trim();

  if (userInputValue === '') {
    alert('Please enter a valid article snippet.'); // Alert user to enter an input
    userInput.focus(); // Set focus back to input field and wait for valid input
    return isValid = false;  // Return false if input is invalid
  } else {
    return isValid = true;
  }
}

export { validateInput };
export { isValid };
