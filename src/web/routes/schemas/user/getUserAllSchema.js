'use strict';

const queryStringJsonSchema = {
  page: { type: 'number' },
  limit: { type: 'number' },
};

const responseJsonSchema = {
  '2xx': {
    type: 'object',
    properties: {
      previous: {
        type: 'object',
        properties: {
          page: { type: 'number' },
          limit: { type: 'number' },
        },
      },
      next: {
        type: 'object',
        properties: {
          page: { type: 'number' },
          limit: { type: 'number' },
        },
      },
      data: {
        type: 'array',
        items: {
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
      },
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
  querystring: queryStringJsonSchema,
  response: responseJsonSchema,
};

module.exports = schema;
