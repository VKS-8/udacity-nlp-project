import { Client } from "../js/client";

describe('Testing the input validation functionality', () => {
  test('Check if validateInput is defined correctly', () => {
    expect(Client.validateInput).toBeDefined();
  });
});