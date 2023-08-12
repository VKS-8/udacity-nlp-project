function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  const nameInput = document.getElementById('name');

  if (nameInput === null) {
    // Stop if input is null
    return;
  }

  const nameValue = nameInput.value.trim();

  if (nameValue === '') {
    alert('Please enter a valid name.'); // Alert user to enter an input
    nameInput.focus(); // Set focus back to input field and wait for valid input
  };
}

export { checkForName }