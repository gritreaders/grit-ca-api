'use strict';

module.exports = class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  add(userEntity) {
    return Promise.reject(new Error('not implemented'));
  }

  update(userEntity) {
    return Promise.reject(new Error('not implemented'));
  }
  delete(userEntity) {
    return Promise.reject(new Error('not implemented'));
  }

  getById(userId) {
    return Promise.reject(new Error('not implemented'));
  }

  getByEmail(email) {
    return Promise.reject(new Error('not implemented'));
  }

  getAll() {
    return Promise.reject(new Error('not implemented'));
  }
};
