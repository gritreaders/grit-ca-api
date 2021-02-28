'use strict';

module.exports = class DatabaseService {
  constructor() {
    this.userRepository = null;
  }

  initDatabase() {
    return Promise.reject(new Error('not implemented'));
  }
};
