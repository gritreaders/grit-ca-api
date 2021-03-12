'use strict';

const paramsJsonSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['id'],
  properties: { id: { type: 'number' } },
};

const responseJsonSchema = {
  '2xx': {
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
};

const schema = {
  params: paramsJsonSchema,
  response: responseJsonSchema,
};

module.exports = schema;
