'use strict';

const bcryptjs = require('bcryptjs');

const constants = require('./constants');

const hash = (data) => {
  return bcryptjs.hash(data, constants.SECURITY.SALT_OF_ENCRYPTION);
};

const compare = (data, encryptedData) => {
  return bcryptjs.compare(data, encryptedData);
};

module.exports = {
  hash,
  compare,
};
