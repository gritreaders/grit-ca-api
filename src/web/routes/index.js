'use strict';

const autoload = require('fastify-autoload');
const path = require('path');

// eslint-disable-next-line no-unused-vars
module.exports = async (fastify, options) => {
  await fastify.register(autoload, {
    dir: path.join(__dirname, 'v1'),
    options: { prefix: '/api/v1' },
  });
};
