import { checkForName } from "./nameChecker";
import { handleSubmit } from "./formHandler";
import { callAPI } from "./apiCall";
import { validateInput } from "./validateInput";

// Create the Client namespace
const Client = {};

// Attach functions to the Client namespace
Client.checkForName = checkForName;
Client.handleSubmit = handleSubmit;
Client.callAPI = callAPI;
Client.validateInput = validateInput;

export { Client };