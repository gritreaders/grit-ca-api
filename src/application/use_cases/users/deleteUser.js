'use strict';

module.exports = (userRepository) => {
  async function execute(userId) {
    if (!userId) {
      return { message: 'user id not supplied' };
    }

    return await userRepository.delete(userId);
  }

  return {
    execute,
  };
};
