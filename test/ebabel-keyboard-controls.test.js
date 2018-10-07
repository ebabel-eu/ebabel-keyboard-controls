'use strict';

const { mockDataStore } = require('ebabel-mocks');
const { keyboardControls } = require('../src/ebabel-keyboard-controls.js');

let dataStore;

beforeEach(() => {
  dataStore = mockDataStore;
});

test('keyboardControls returns something other than undefined.', () => {
  const result = keyboardControls(dataStore);
  expect(result !== undefined).toBe(true);
});

