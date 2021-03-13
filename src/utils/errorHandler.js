'use strict';

const response = require('./response');

const errorHandler = (err, request, reply) => {
  return response.error(request, reply, err.statusCode, err.message, err.stack);
};

module.exports = errorHandler;
