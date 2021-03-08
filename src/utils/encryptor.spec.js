/* eslint-disable no-undef */
'use strict';

const Faker = require('faker');
const encryptor = require('./encryptor');

describe('encryptor', () => {
  const name = Faker.name.findName();
  const LENGTH_OF_CRYPT_VALUE = 60;
  let encryptedValue;
  describe('isValidEncryptedValue', () => {
    it('Given a string, then the function must return an string of sixty length', async () => {
      encryptedValue = await encryptor.hash(name);
      expect(encryptedValue.length).toBe(LENGTH_OF_CRYPT_VALUE);
    });
  });
  describe('isTheSameValue', () => {
    it('Given a string and hashedValue, then the function must return true', async () => {
      const isTheSameValue = await encryptor.compare(name, encryptedValue);
      expect(isTheSameValue).toBe(true);
    });
  });
});
