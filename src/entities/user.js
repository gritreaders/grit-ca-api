'use strict';

module.exports = class User {
  constructor(firstName, lastName, avatarUrl, isActive) {
    this.userId = null;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatarUrl = avatarUrl;
    this.isActive = isActive;
  }
};
