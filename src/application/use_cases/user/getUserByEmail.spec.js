/* eslint-disable no-undef */
'use strict';

const faker = require('faker');

const {
  UserRepositoryMock,
  getFirstUser,
} = require('../../../utils/mocks/UserRepositoryMock');
const getUserByEmailCommand = require('./getUserByEmail');

describe('getUserByEmail', () => {
  const userRepository = new UserRepositoryMock();
  describe('email not supplied', () => {
    it(`give an undefined email, then the function must return an object with value 'email not supplied' in property message`, async () => {
      const messageExpected = { message: 'email not supplied' };

      const messageReceived = await getUserByEmailCommand(
        userRepository
      ).execute();

      expect(messageReceived).toStrictEqual(messageExpected);
    });
    it(`give an not registered email, then the function must return an object with value 'user not found' in property message`, async () => {
      const messageExpected = { message: 'user not found' };

      const messageReceived = await getUserByEmailCommand(
        userRepository
      ).execute(faker.internet.email());

      expect(messageReceived).toStrictEqual(messageExpected);
    });
    it(`give an registered email, then the function must return an user`, async () => {
      const userExpected = getFirstUser();

      const userReceived = await getUserByEmailCommand(userRepository).execute(
        userExpected.email
      );

      expect(userReceived).toStrictEqual(userExpected);
    });
  });
});
