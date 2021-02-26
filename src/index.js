'use strict';

const fastify = require('fastify')({
  logger: true,
});
const fsequelize = require('fastify-sequelize');

const environment = require('./config/environment');
const constants = require('./config/constants');

console.log(environment.database);

const sequelizeConfig = {
  instance: constants.SUPPORTED_ORM.INSTANCE,
  autoConnect: true,
  dialect: environment.database.dialect,
  database: environment.database.name,
  username: environment.database.username,
  password: environment.database.password,
};

fastify.register(fsequelize, sequelizeConfig);
fastify.register(require('./web/routes/index.js'));

fastify.listen(environment.app.port, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
