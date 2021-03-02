'use strict';

module.exports = (userRepository) => {
  async function execute(userId) {
    if (!userId) {
      return { message: 'user id not supplied' };
    }

    const searchedUser = await userRepository.getById(userId);

    if (!searchedUser) {
      return { message: 'user not found' };
    }

    await userRepository.delete(userId);

    return { message: 'user deleted' };
  }

  return {
    execute,
  };
};
