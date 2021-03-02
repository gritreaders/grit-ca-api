'use strict';

const UserRepository = require('../../../application/contracts/userRepository');

module.exports = class PostgresUserRepository extends UserRepository {
  constructor(userModel) {
    super();
    this.userModel = userModel;
  }

  async add(user) {
    return await this.userModel.create(user);
  }

  async update(userId, user) {
    const searchedUser = await this.userModel.findByPk(userId);

    searchedUser.firstName = user.firstName;
    searchedUser.lastName = user.lastName;
    searchedUser.email = user.email;
    searchedUser.avatarUrl = user.avatarUrl;
    searchedUser.isActive = user.isActive;

    return await searchedUser.save();
  }

  async delete(userId) {
    return await this.userModel.destroy({ where: { userId } });
  }

  async getById(userId) {
    return await this.userModel.findByPk(userId);
  }

  async getByEmail(email) {
    return await this.userModel.findOne({ where: { email: email } });
  }

  async getAll() {
    return await this.userModel.findAll();
  }
};
