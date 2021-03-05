'use strict';

module.exports = (userRepository) => {
  async function execute() {
    let searchedUsers = await userRepository.getAll();

    searchedUsers = searchedUsers.map((searchedUser) => {
      // delete searchedUser.password;

      return searchedUser;
    });

    return searchedUsers;
  }

  return {
    execute,
  };
};
