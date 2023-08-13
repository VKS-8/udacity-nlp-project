import { Client } from "../js/client";

describe('Testing the handleSubmit functionality', () => {
  test('Check if handleSubmit is defined correctly', () => {
    expect(Client.handleSubmit).toBeDefined();
  });
});