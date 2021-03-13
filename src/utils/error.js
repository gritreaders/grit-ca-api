'use strict';

module.exports = (statusCode, message) => {
  let error = new Error(message);

  if (statusCode) {
    error.statusCode = statusCode;
  }

  return error;
};
