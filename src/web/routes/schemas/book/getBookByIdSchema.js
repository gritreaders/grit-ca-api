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
      bookId: { type: 'number' },
      title: { type: 'string' },
      content: { type: 'string' },
      shortContent: { type: 'string' },
      publisher: { type: 'string' },
      publisherAt: { type: 'string', format: 'date' },
      pages: { type: 'number' },
      language: { type: 'string' },
      detailsUrl: { type: 'string', format: 'uri' },
      downloadUrl: { type: 'string', format: 'uri' },
      readOnlineUrl: { type: 'string', format: 'uri' },
      coverUrl: { type: 'string', format: 'uri' },
      thumbnailUrl: { type: 'string', format: 'uri' },
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
