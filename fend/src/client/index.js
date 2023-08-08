import { checkForArticle } from './js/articleChecker'
import { handleSubmit } from './js/formHandler'
import { validateInput } from './js/validateInput'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForArticle);

alert("I EXIST")
console.log("CHANGE WHAT??");

const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate user input
  const isValid = validateInput();

  if (isValid) {
    // Submit form
    handleSubmit(event);
  }
});