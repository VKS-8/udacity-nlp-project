import { checkForArticle } from "./articleChecker"

function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('article').value
  checkForArticle(formText)

  console.log("::: Form Submitted :::")
  fetch('http://localhost:8080/nlp')
  .then(res => res.json())
  .then(function(res) {
      document.getElementById('results').innerHTML = res.message
  })
}

export { handleSubmit }