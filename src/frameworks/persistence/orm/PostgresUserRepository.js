'use strict';

const UserRepository = require('../../../application/contracts/UserRepository');

module.exports = class PostgresUserRepository extends UserRepository {
  constructor(userModel) {
    super();
    this.userModel = userModel;
  }

  async add(user) {
    const addedUser = await this.userModel.create(user);
    return addedUser;
  }

  async update(userId, user) {
    const searchedUser = await this.userModel.findByPk(userId);

    searchedUser.firstName = user.firstName;
    searchedUser.lastName = user.lastName;
    searchedUser.email = user.email;
    searchedUser.avatarUrl = user.avatarUrl;
    searchedUser.isActive = user.isActive;

    const savedUser = await searchedUser.save();

    return savedUser;
  }

  async delete(userId) {
    const deletedUser = await this.userModel.destroy({ where: { userId } });
    return deletedUser;
  }

  async getById(userId) {
    const searchedUser = await this.userModel.findByPk(userId);
    return searchedUser;
  }

  async getByEmail(email) {
    const searchedUser = await this.userModel.findOne({
      where: { email: email },
    });
    return searchedUser;
  }

  async getAll() {
    const searchedUsers = await this.userModel.findAll();
    return searchedUsers;
  }
};
