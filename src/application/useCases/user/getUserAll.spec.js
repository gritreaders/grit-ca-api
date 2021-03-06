/* eslint-disable no-undef */
'use strict';

const {
  UserRepositoryMock,
  usersMock,
} = require('../../../mocks/UserRepositoryMock');

const getUserAllCommand = require('./getUserAll');

describe('getUserAll', () => {
  const userRepositoryMock = new UserRepositoryMock();
  describe('get all users', () => {
    // FIXME: unit test
    it('given an userRepositoryMock, then the function must return the same values of usersMock', async () => {
      const usersActual = await getUserAllCommand(userRepositoryMock).execute();
      expect(usersActual.data).toStrictEqual(usersMock);
    });
    // TODO: unit test with pagination
  });
});
