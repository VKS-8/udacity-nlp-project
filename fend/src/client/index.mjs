import {handleSubmit} from './js/formHandler.mjs'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

    // Submit form
    handleSubmit(event);

});