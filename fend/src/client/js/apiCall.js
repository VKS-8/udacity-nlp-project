function callAPI() {
  // Used chatGPT to determine how to set up proper parameters from form to
  // post to server
  document.getElementById('evaluationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const fetchData = async (url = '', data = {}) => {
      console.log(data);

      const response = await fetch('http://localhost:8080/', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      try {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const responseData = await response.json();
        // console.log(responseData);
        // return responseData;

        // const {userData, subjectivity, scoreTag, agreement} = responseData;

        document.querySelector('#results').innerText = responseData;

        // `Subjectivity: ${subjectivity}
        // Polarity: ${scoreTag}
        // Text: ${userData}
        // Agreement: ${agreement}`;

      } catch (error) {
        console.error('Error:', error.message);
        throw error;
      }
    }
    fetchData('/', userData);
  });
}

export { callAPI };