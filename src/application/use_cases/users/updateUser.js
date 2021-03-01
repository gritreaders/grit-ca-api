'use strict';

module.exports = (userRepository) => {
  async function execute(userId, userEntity) {
    if (!userId) {
      return { message: 'user id not supplied' };
    }

    let searchedUser = await userRepository.getById(userId);

    if (!searchedUser) {
      return { message: 'user not found' };
    }

    searchedUser.firstName = userEntity.firstName || searchedUser.firstName;
    searchedUser.lastName = userEntity.lastName || searchedUser.lastName;
    searchedUser.email = userEntity.email || searchedUser.email;
    searchedUser.password = userEntity.password || searchedUser.password;
    searchedUser.avatarUrl = userEntity.avatarUrl || searchedUser.avatarUrl;
    searchedUser.isActive = userEntity.isActive || searchedUser.isActive;

    return await userRepository.update(userId, searchedUser);
  }

  return {
    execute,
  };
};
