'use strict';

const fastify = require('fastify')({
  logger: true,
});
const autoload = require('fastify-autoload');
const path = require('path');

const { environment, constants } = require('./config');

fastify.register(require('sequelize-fastify'), {
  instance: constants.SUPPORTED_ORM.INSTANCE,
  sequelizeOptions: {
    dialect: environment.database.dialect,
    database: environment.database.name,
    host: environment.database.host,
    username: environment.database.username,
    password: environment.database.password,
  },
  dialectOptions: {
    encrypt: environment.database.encrypt,
    trustedConnection: environment.database.trustedConnection,
    requestTimeout: environment.database.requestTimeOut,
  },
});

fastify.register(autoload, {
  dir: path.join(__dirname, 'entities'),
});

fastify.register(autoload, {
  dir: path.join(__dirname, 'web/routes/v1'),
  options: { prefix: '/api/v1' },
});

const start = async () => {
  try {
    await fastify.listen(environment.app.port);
    await fastify.db.authenticate();
    await fastify.db.sync({ force: environment.app.dev });
  } catch (err) {
    fastify.log.error(err);
  }
};

start();
