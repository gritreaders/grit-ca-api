'use strict';
const signInUserSchema = {
  body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
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
        token: { type: 'string' },
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

module.exports = signInUserSchema;
