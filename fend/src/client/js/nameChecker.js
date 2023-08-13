function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  // const nameInput = document.getElementById('name');

  if (inputText === null) {
    // Stop if input is null
    console.log('Input is null');
    } else {

      const nameValue = inputText.value.trim();

      if (nameValue === '') {
        alert('Please enter a valid name.'); // Alert user to enter an input
        inputText.focus(); // Set focus back to input field and wait for valid input
      } else {
        return isValid;
      };
    };
}

export { checkForName }