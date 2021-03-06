'use strict';

const environment = require('../config/environment');
const serviceLocator = require('../config/serviceLocator');

const createServer = async () => {
  const server = require('fastify')({ logger: true });

  serviceLocator.DatabaseService.init(server);

  server.register(require('../frameworks/common/authenticateJwt'));
  server.register(require('./routes'));

  server.start = async () => {
    await server.listen(environment.app.port, environment.app.host);
    serviceLocator.DatabaseService.connect(server);
  };

  return server;
};

module.exports = createServer;
