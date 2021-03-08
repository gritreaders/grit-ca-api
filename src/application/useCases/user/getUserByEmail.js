'use strict';

module.exports = (userRepository) => {
  async function execute(email) {
    if (!email) {
      return { message: 'email not supplied' };
    }

    const searchedUser = await userRepository.getByEmail(email);

    if (!searchedUser) {
      return { message: 'user not found' };
    }

    return searchedUser;
  }

  return {
    execute,
  };
};
