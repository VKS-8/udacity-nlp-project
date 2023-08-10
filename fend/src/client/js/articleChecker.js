const validateInput = require("./validateInput");
const projectData = require("./validateInput");

// Global variable

function checkForArticle(formText) {
  console.log("::: Running checkForArticle :::", formText);

  const isValid = validateInput();

  if(isValid && formText in projectData) {
    return projectData;
  }
}

export { checkForArticle };