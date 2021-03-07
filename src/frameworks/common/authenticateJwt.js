'use strict';

const environment = require('../../config/environment');
const fastifyPlugin = require('fastify-plugin');

// eslint-disable-next-line no-unused-vars
module.exports = fastifyPlugin(async (fastify, opts) => {
  await fastify.register(require('fastify-jwt'), {
    secret: environment.app.jwt_secret,
  });

  await fastify.decorate('authenticate', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
});
