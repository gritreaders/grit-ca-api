/* eslint-disable no-undef */
'use strict';

const faker = require('faker');

const {
  UserRepositoryMock,
  getFirstUser,
} = require('../../../mocks/UserRepositoryMock');

const getUserByIdCommand = require('./getUserById');

describe('getUserById', () => {
  const userRepository = new UserRepositoryMock();
  describe('user id not supplied', () => {
    it(`give an undefined user id, then the function must return an object with value 'user id not supplied' in property message`, async () => {
      const messageExpected = { message: 'user id not supplied' };

      const messageReceived = await getUserByIdCommand(
        userRepository
      ).execute();

      expect(messageReceived).toStrictEqual(messageExpected);
    });
  });
  describe('user not found', () => {
    it(`give an not exists user id, then the function must return an object with value 'user not found' in property message`, async () => {
      const messageExpected = { message: 'user not found' };

      const messageReceived = await getUserByIdCommand(userRepository).execute(
        faker.internet.email()
      );

      expect(messageReceived).toStrictEqual(messageExpected);
    });
  });
  describe('searchedUser', () => {
    it(`give an exists user id, then the function must return an user object`, async () => {
      const userExpected = getFirstUser();

      const userReceived = await getUserByIdCommand(userRepository).execute(
        userExpected.userId
      );

      expect(userReceived).toStrictEqual(userExpected);
    });
  });
});
