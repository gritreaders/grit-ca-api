'use strict';

const { hash } = require('../../../frameworks/common/encryptor');

module.exports = (userRepository) => {
  async function execute(userId, user) {
    if (!userId) {
      return { message: 'user id not supplied' };
    }

    let searchedUser = await userRepository.getById(userId);

    if (!searchedUser) {
      return { message: 'user not found' };
    }

    searchedUser.firstName = user.firstName || searchedUser.firstName;
    searchedUser.lastName = user.lastName || searchedUser.lastName;
    searchedUser.email = user.email || searchedUser.email;

    if (user.password) {
      user.password = await hash(user.password);
    }

    searchedUser.password = user.password || searchedUser.password;
    searchedUser.avatarUrl = user.avatarUrl || searchedUser.avatarUrl;
    searchedUser.isActive = user.isActive || searchedUser.isActive;

    const updatedUser = await userRepository.update(userId, searchedUser);

    delete updatedUser.dataValues.password;

    return updatedUser;
  }

  return {
    execute,
  };
};
