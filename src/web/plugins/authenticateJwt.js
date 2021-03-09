'use strict';

const fp = require('fastify-plugin');

const environment = require('../../config/environment');

// eslint-disable-next-line no-unused-vars
const jwtAuthentication = async (fastify, opts) => {
  await fastify.register(require('fastify-jwt'), {
    secret: environment.app.jwt.secret,
  });

  await fastify.decorate('authenticate', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
};

module.exports = fp(jwtAuthentication);
