/* eslint-disable no-magic-numbers */
'use strict';

const environment = require('../config/environment');

const success = (
  request,
  reply,
  statusCode = 200,
  message = 'Done',
  data = {},
  previous = {},
  next = {}
) => {
  const responseJsonSchema = {
    meta: {
      error: false,
      message: message,
    },
    previous: previous,
    next: next,
    data: data,
  };

  return reply.status(statusCode).send(responseJsonSchema);
};

const error = (
  request,
  reply,
  statusCode = 500,
  message = 'Internal Server Error',
  stack
) => {
  let meta = {
    statusCode: statusCode,
    error: true,
    message: message,
  };

  if (environment.app.dev) {
    meta.stack = stack;
  }

  return reply.status(statusCode).send({
    meta: meta,
  });
};

module.exports = {
  success,
  error,
};
