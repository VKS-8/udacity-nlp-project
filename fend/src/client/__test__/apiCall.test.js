import { Client } from "../js/client";

describe('Testing the callAPI functionality', () => {
  test('Check if callAPI is defined correctly', () => {
    expect(Client.callAPI).toBeDefined();
  });
});