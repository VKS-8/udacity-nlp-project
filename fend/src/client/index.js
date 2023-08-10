const articleChecker = require('./js/articleChecker')
const handleSubmit = require('./js/formHandler')
const validateInput = require('./js/validateInput')

require('./styles/resets.scss')
require('./styles/base.scss')
require('./styles/footer.scss')
require('./styles/form.scss')
require('./styles/header.scss')



console.log(articleChecker);

alert("I EXIST")
console.log("Remove alert");

const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate user input
  const isValid = validateInput;

  if (isValid) {
    // Submit form
    handleSubmit(event);
  }
});

export {
  articleChecker,
  validateInput,
  handleSubmit
}