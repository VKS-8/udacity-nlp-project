import { validateInput } from "./validateInput";

// Global variable

function checkForArticle(formText) {
  console.log("::: Running checkForArticle :::", formText);

  validateInput();

  if(projectData.includes(formText)) {
      alert("Thank you for your article submission!")
  }
}

export { checkForArticle }