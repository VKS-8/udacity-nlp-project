import { checkForName } from "../js/nameChecker";

describe('Testing the submit functionality', () => {
  test('Check if handleSubmit is defined correctly', () => {
    expect(checkForName).toBeDefined();
  });
});