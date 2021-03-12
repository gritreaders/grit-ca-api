/* eslint-disable no-undef */
'use strict';

const faker = require('faker');

const {
  getNextUserId,
  getFirstUser,
  UserRepositoryMock,
} = require('../../../mocks/UserRepositoryMock');

const addUserCommand = require('./addUser');
const User = require('../../../entities/User');

const { hash } = require('../../../utils/encryptor');

describe('addUser', () => {
  const userRepositoryMock = new UserRepositoryMock();

  describe('adding user', () => {
    it(`give an user with invalid values, then the function must return an object with the value 'value not valid' in message property`, async () => {
      const userExpected = new User(
        undefined,
        null,
        undefined,
        null,
        undefined,
        null
      );
      const messageExpected = { message: 'value not valid' };

      const messageActual = await addUserCommand(userRepositoryMock).execute(
        userExpected
      );

      expect(messageActual).toStrictEqual(messageExpected);
    });
    it(`give an exists user, then the function must return an object with the value 'email already register' in message property`, async () => {
      const userExpected = getFirstUser();
      const messageExpected = { message: 'email already register' };

      const messageActual = await addUserCommand(userRepositoryMock).execute(
        userExpected
      );

      expect(messageExpected).toStrictEqual(messageActual);
    });
    it('give an user, then the function must return the added user', async () => {
      const userExpected = new User(
        faker.name.firstName(),
        faker.name.lastName(),
        faker.internet.email(),
        faker.internet.password(),
        faker.image.imageUrl(),
        faker.random.boolean()
      );

      const userActual = await addUserCommand(userRepositoryMock).execute(
        userExpected
      );

      userExpected.userId = getNextUserId();
      userExpected.password = await hash(userExpected.password);

      expect(userActual).toStrictEqual(userExpected);
    });
  });
});
