function validateInput() {
    // Get input text from form
    const inputText = document.getElementById('text').value;

    // Validate user input
    const isValid = Client.checkForName(inputText);

    if (isValid) {
      // Submit form
      Client.handleSubmit();
    }
}

export { validateInput };