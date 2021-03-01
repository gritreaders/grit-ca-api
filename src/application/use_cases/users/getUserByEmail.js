'use strict';

module.exports = (userRepository) => {
  async function execute(email) {
    if (!email) {
      return { message: 'email not supplied' };
    }

    return await userRepository.getByEmail(email);
  }

  return {
    execute,
  };
};
