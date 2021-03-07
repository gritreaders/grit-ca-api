'use strict';

const apiError = require('../../../frameworks/common/apiError');

module.exports = (userRepository) => {
  async function execute(userId) {
    if (!userId) {
      return { message: 'user id not supplied' };
    }

    const searchedUser = await userRepository.getById(userId);

    if (!searchedUser) {
      throw new apiError(404, 'User Not Found');
    }

    await userRepository.delete(userId);

    return { message: 'user deleted' };
  }

  return {
    execute,
  };
};
