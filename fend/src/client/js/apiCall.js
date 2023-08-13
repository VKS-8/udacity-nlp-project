function callAPI() {
  // Used chatGPT to determine how to set up proper parameters from form to
  // post to server
  // document.getElementById('evaluationForm').addEventListener('submit', async (e) => {
  //   e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    const fetchData = async (url = '', data = {}) => {
      console.log(data);

      const response = await fetch('http://localhost:8080/', {
        method: 'POST',
        credentials: 'same-origin',
        hostname: 'api.meaningcloud.com',
        redirect: follow,
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(data),
      });

      try {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const apiResponseData = await response.json();
        // console.log(apiResponseData);
        // return responseData;

        // const {userData, subjectivity, scoreTag, agreement} = apiResponseData;

        document.querySelector('#results').innerText = `${apiResponseData}`;

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
  }

export { callAPI };