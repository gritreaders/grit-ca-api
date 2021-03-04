'use strict';

const environment = require('../config/environment');
const serviceLocator = require('../config/serviceLocator');

const createServer = async () => {
  const server = require('fastify')({ logger: true });

  await serviceLocator.DatabaseService.init(server);
  await server.register(require('./routes'));

  server.start = async () => {
    await server.listen(environment.app.port, environment.app.host);
    await serviceLocator.DatabaseService.connect(server);
  };

  return server;
};

module.exports = createServer;
