'use strict';

module.exports = (userRepository) => {
  async function execute(userEntity) {
    if (
      !userEntity.firstName ||
      !userEntity.lastName ||
      !userEntity.email ||
      !userEntity.password
    ) {
      return { message: 'valued not valid' };
    }

    const searchedUser = await userRepository.getByEmail(userEntity.email);

    if (searchedUser) {
      return { message: 'email already register' };
    }

    return await userRepository.add(userEntity);
  }

  return {
    execute,
  };
};
