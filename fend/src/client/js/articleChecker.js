import { validateInput } from "./validateInput";

// Global variable

function checkForArticle(formText) {
  console.log("::: Running checkForArticle :::", formText);

  validateInput();

  if(projectData.includes(formText)) {
    return projectData;
  }
}

export { checkForArticle }