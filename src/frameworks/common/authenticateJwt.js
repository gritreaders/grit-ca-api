'use strict';

const environment = require('../../config/environment');
const fastifyPlugin = require('fastify-plugin');

module.exports = fastifyPlugin(async function (fastify, opts) {
  fastify.register(require('fastify-jwt'), {
    secret: environment.app.jwt_secret,
  });

  fastify.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
});
