'use strict';

module.exports = (userRepository) => {
  async function execute() {
    let searchedUsers = await userRepository.getAll();

    searchedUsers = searchedUsers.map((searchedUser) => {
      return searchedUser;
    });

    return searchedUsers;
  }

  return {
    execute,
  };
};
