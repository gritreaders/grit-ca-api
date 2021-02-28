'use strict';

module.exports = class UserRepository {
  constructor() {}

  add(userInstance) {
    return Promise.reject(new Error('not implemented'));
  }

  update(userInstance) {
    return Promise.reject(new Error('not implemented'));
  }
  delete(userInstance) {
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
