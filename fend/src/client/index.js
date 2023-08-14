import { Client } from './js/client'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('evaluationForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    Client.validateInput();
  })

});