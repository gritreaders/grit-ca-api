'use strict';

const fastify = require('fastify')({
  logger: true,
});

const projectDependencies = require('./config/projectDependencies');

const environment = require('./config/environment');

const bootstrap = async () => {
  try {
    projectDependencies.DatabaseService.initDatabase(fastify);

    fastify.register(require('./web/routes'));

    const start = async () => {
      await fastify.listen(environment.app.port);
      projectDependencies.DatabaseService.initConnection(fastify);
    };

    start();
  } catch (err) {
    fastify.log.error(err);
  }
};

bootstrap();
