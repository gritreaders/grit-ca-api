'use strict';

const { hash } = require('../../../frameworks/common/encryptor');

module.exports = (userRepository) => {
  async function execute(user) {
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      return { message: 'value not valid' };
    }

    const searchedUser = await userRepository.getByEmail(user.email);

    if (searchedUser) {
      return { message: 'email already register' };
    }

    user.password = await hash(user.password);

    const addedUser = await userRepository.add(user);

    return addedUser;
  }

  return {
    execute,
  };
};
