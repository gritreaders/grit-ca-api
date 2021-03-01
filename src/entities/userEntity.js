'use strict';

const constants = require('../config/constants');

module.exports = class UserEntity {
  constructor(
    firstName,
    lastName,
    email,
    password,
    avatarUrl = constants.DEFAULT_VALUES.AVATAR_URL,
    isActive = constants.DEFAULT_VALUES.IS_ACTIVE
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.avatarUrl = avatarUrl;
    this.isActive = isActive;
  }
};
