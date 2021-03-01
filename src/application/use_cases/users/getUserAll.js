'use strict';

module.exports = (userRepository) => {
  async function execute() {
    return await userRepository.getAll();
  }

  return {
    execute,
  };
};
