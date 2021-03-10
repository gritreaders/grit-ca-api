/* eslint-disable no-undef */
'use strict';

const faker = require('faker');

const User = require('../../../entities/User');

const updateUserCommand = require('./updateUser');

const {
  getNextUserId,
  getFirstUser,
  UserRepositoryMock,
} = require('../../../mocks/UserRepositoryMock');

describe('updateUser', () => {
  const userRepository = new UserRepositoryMock();
  describe('user id not supplied', () => {
    it("give an user id undefined, then the function must return an object with value 'user id not supplied' in property message", async () => {
      const messageExpected = { message: 'user id not supplied' };

      const messageReceived = await updateUserCommand(userRepository).execute();

      expect(messageReceived).toStrictEqual(messageExpected);
    });
    describe('user not found', () => {
      it("give an user id not registered, then the function must return an object with value 'user not found' in property message", async () => {
        await expect(
          updateUserCommand(userRepository).execute(getNextUserId())
        ).rejects.toThrow();
      });
    });
    describe('user not updated', () => {
      it('give an user id registered an user with undefined values, then the function must return the same values of user id not updated', async () => {
        const userExpected = getFirstUser();
        const undefinedUser = new User();

        const userReceived = await updateUserCommand(userRepository).execute(
          userExpected.userId,
          undefinedUser
        );

        expect(userReceived).toStrictEqual(userExpected);
      });
    });
    describe('user updated', () => {
      it('give an user, then the function must return an user updated', async () => {
        const userExpected = getFirstUser();

        userExpected.email = faker.internet.email();

        const userReceived = await updateUserCommand(userRepository).execute(
          userExpected.userId,
          userExpected
        );

        expect(userExpected).toStrictEqual(userReceived);
      });
    });
  });
});
