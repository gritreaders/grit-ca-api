'use strict';
const userSchema = {
  body: {
    type: 'object',
    required: ['firstName', 'lastName', 'email', 'password'],
    properties: {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string', minLength: 8 },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        userId: { type: 'number' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
        avatarUrl: { type: 'string' },
        isActive: { type: 'boolean' },
      },
    },
    '4xx': {
      statusCode: { type: 'number' },
      error: { type: 'string' },
      message: { type: 'string' },
    },
    '5xx': {
      statusCode: { type: 'number' },
      error: { type: 'string' },
      message: { type: 'string' },
    },
  },
};

module.exports = userSchema;
