'use strict';

const User = require('../../../entities/user');

const constants = require('../../../config/constants');

module.exports = (UserRepository) => {
  async function execute(
    firstName,
    lastName,
    email,
    password,
    avatarUrl = constants.DEFAULT_VALUES.AVATAR_URL,
    isActive = constants.DEFAULT_VALUES.IS_ACTIVE
  ) {
    if (!firstName || !lastName || !email || !password) {
      throw new Error('validations failed');
    }

    const user = await UserRepository.getByEmail(email);

    if (user) {
      throw new Error('email already exists');
    }

    let newUser = new User(firstName, lastName, avatarUrl, isActive);

    const createdUser = await UserRepository.add(newUser);

    return createdUser;
  }

  return {
    execute,
  };
};
