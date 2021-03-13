'use strict';

const autoload = require('fastify-autoload');
const path = require('path');

const environment = require('../config/environment');
const serviceLocator = require('../config/serviceLocator');

const errorHandler = require('../utils/errorHandler');

const createServer = async () => {
  const server = require('fastify')({ logger: true });

  await serviceLocator.DatabaseService.init(server);

  await server.register(require('fastify-cors'), {
    origin: '*',
    methods: ['GET', 'HEAD', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Content-Language',
      'Accept-Language',
      'Accept',
      'Authorization',
    ],
  });

  await server.register(require('fastify-compress'));

  await server.register(autoload, {
    dir: path.join(__dirname, 'plugins'),
  });

  await server.register(autoload, {
    dir: path.join(__dirname, 'routes/v1'),
    options: { prefix: '/api/v1' },
  });

  await server.setErrorHandler(errorHandler);

  server.start = async () => {
    await server.listen(environment.app.port, environment.app.host);
    await serviceLocator.DatabaseService.connect(server);
  };

  return server;
};

module.exports = createServer;
