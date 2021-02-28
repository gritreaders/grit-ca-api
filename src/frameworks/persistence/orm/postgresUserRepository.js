'use strict';

const UserRepository = require('../../../application/contracts/userRepository');

module.exports = class PostgresUserRepository extends UserRepository {
  constructor() {
    super();
  }

  async add(userInstance) {
    return Promise.reject(new Error('not implemented'));
  }
};
