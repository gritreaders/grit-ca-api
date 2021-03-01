'use strict';

const UserRepository = require('../../../application/contracts/userRepository');

module.exports = class PostgresUserRepository extends UserRepository {
  constructor(userModel) {
    super();
    this.userModel = userModel;
  }

  async add(userEntity) {
    return this.userModel.create(userEntity);
  }

  async update(userId, userEntity) {
    const searchedUser = await this.userModel.findByPk(userId);

    searchedUser.firstName = userEntity.firstName || searchedUser.firstName;
    searchedUser.lastName = userEntity.lastName || searchedUser.lastName;
    searchedUser.email = userEntity.email || searchedUser.email;
    searchedUser.password = userEntity.password || searchedUser.password;
    searchedUser.avatarUrl = userEntity.avatarUrl || searchedUser.avatarUrl;
    searchedUser.isActive = userEntity.isActive || searchedUser.isActive;

    return await searchedUser.update();
  }

  async delete(userId) {
    const searchedUser = await this.userModel.findByPk(userId);
    return await searchedUser.destroy();
  }

  async getById(userId) {
    return this.userModel.findByPk(userId);
  }

  async getByEmail(email) {
    return this.userModel.findOne({ where: { email: email } });
  }

  async getAll() {
    return this.userModel.findAll();
  }
};
