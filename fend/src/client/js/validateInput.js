function validateInput() {
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get input text from form
    const inputText = document.getElementById('name').value;

    // Validate user input
    const isValid = Client.checkForName(inputText);

    if (isValid) {
      // Submit form
      Client.handleSubmit(event);
    }
  });
}

export { validateInput };