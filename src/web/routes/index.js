'use strict';

const autoload = require('fastify-autoload');
const path = require('path');

module.exports = async (fastify, options) => {
  fastify.register(autoload, {
    dir: path.join(__dirname, 'v1'),
    options: { prefix: '/api/v1' },
  });
};
