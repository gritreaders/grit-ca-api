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
      message: { type: 'string' },
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
