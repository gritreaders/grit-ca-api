/* eslint-disable no-unused-vars */
'use strict';

module.exports = class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  add(user) {
    return Promise.reject(new Error('not implemented'));
  }

  update(userId, user) {
    return Promise.reject(new Error('not implemented'));
  }

  delete(userId) {
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
