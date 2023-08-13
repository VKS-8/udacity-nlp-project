function validateInput() {
    // Get input text from form
    const inputText = document.getElementById('name').value;

    // Validate user input
    const isValid = Client.checkForName(inputText);

    if (isValid) {
      // Submit form
      Client.handleSubmit();
    }
}

export { validateInput };