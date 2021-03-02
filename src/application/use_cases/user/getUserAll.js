'use strict';

module.exports = (userRepository) => {
  async function execute() {
    let searchedUsers = await userRepository.getAll();

    searchedUsers = searchedUsers.map((searchedUser) => {
      delete searchedUser.dataValues.password;

      return searchedUser;
    });

    return searchedUsers;
  }

  return {
    execute,
  };
};
