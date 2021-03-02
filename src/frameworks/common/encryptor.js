'use strict';

const bcrypt = require('bcrypt');

const constants = require('../../config/constants');

const hash = (data) => {
  return bcrypt.hash(data, constants.SECURITY.SALT_OF_ENCRYPTION);
};

const compare = (data, encryptedData) => {
  return bcrypt.compare(data, encryptedData);
};

module.exports = {
  hash,
  compare,
};
