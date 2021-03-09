'use strict';

module.exports = (userRepository) => {
  async function execute() {
    let searchedUsers = await userRepository.getAll();
    return searchedUsers;
  }

  return {
    execute,
  };
};
