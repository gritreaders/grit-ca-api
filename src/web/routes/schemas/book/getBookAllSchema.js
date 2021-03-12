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
            bookId: { type: 'number' },
            title: { type: 'string' },
            content: { type: 'string' },
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
