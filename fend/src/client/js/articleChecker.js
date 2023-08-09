import { validateInput } from "./validateInput";

// Global variable
let projectData = {}

function checkForArticle(formText) {
  console.log("::: Running checkForArticle :::", formText);

  validateInput();

  if(projectData.includes(formText)) {
      alert("Thank you for your article submission!")
  }
}

export { checkForArticle }