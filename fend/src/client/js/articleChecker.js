import { validateInput } from "./validateInput";
import { projectData } from "./validateInput";

// Global variable

function checkForArticle(formText) {
  console.log("::: Running checkForArticle :::", formText);

  const isValid = validateInput();

  if(isValid && formText in projectData) {
    return projectData;
  }
}

export { checkForArticle }