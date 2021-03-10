'use strict';

module.exports = class User {
  constructor(firstName, lastName, email, password, avatarUrl, isActive) {
    this.userId = undefined;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.avatarUrl = avatarUrl;
    this.isActive = isActive;
  }
};
