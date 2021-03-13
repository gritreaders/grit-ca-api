'use strict';

const error = require('../../../utils/error');

module.exports = (userRepository) => {
  async function execute(userId) {
    if (!userId) {
      return { message: 'user id not supplied' };
    }

    const searchedUser = await userRepository.getById(userId);

    if (!searchedUser) {
      // eslint-disable-next-line no-magic-numbers
      throw new error(404, 'User Not Found');
    }

    await userRepository.delete(userId);

    return { message: 'user deleted' };
  }

  return {
    execute,
  };
};
