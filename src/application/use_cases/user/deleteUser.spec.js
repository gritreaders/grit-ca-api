/* eslint-disable no-undef */
'use strict';

const {
  getFirstUser,
  getNextUserId,
  UserRepositoryMock,
} = require('../../../utils/mocks/UserRepositoryMock');

const deleteUserCommand = require('./deleteUser');

describe('deleteUser', () => {
  const userRepository = new UserRepositoryMock();
  describe('deleting user', () => {
    it(`give an userId undefined, then the function must return an object with value 'user id not supplied' in property message`, async () => {
      const messageExpected = { message: 'user id not supplied' };

      const messageReceived = await deleteUserCommand(userRepository).execute();

      expect(messageReceived).toStrictEqual(messageExpected);
    });
    it(`give an userId not found, then the function must return an object with value 'user not found' in property message`, async () => {
      const notExistsUserId = getNextUserId();
      const messageExpected = { message: 'user not found' };

      const messageReceived = await deleteUserCommand(userRepository).execute(
        notExistsUserId
      );

      expect(messageReceived).toStrictEqual(messageExpected);
    });
    it(`give an userId, then the function must return an object with value 'user deleted' in property message`, async () => {
      const { userId } = getFirstUser();
      const messageExpected = { message: 'user deleted' };

      const messageReceived = await deleteUserCommand(userRepository).execute(
        userId
      );

      expect(messageReceived).toStrictEqual(messageExpected);
    });
  });
});
