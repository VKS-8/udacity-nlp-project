import { Client } from "../js/client";

describe('Testing the valid text input functionality', () => {
  test('Check if checkForName is defined correctly', () => {
    expect(Client.checkForName).toBeDefined();
  });
});