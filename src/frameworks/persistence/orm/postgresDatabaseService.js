'use strict';

const autoload = require('fastify-autoload');
const path = require('path');

const PostgresUserRepository = require('./postgresUserRepository');
const DatabaseService = require('../../../application/contracts/databaseService');

const environment = require('../../../config/environment');
const constants = require('../../../config/constants');

module.exports = class PostgresDatabaseService extends DatabaseService {
  constructor() {
    super();
    this.userRepository = new PostgresUserRepository();
  }

  async initDatabase(dependency) {
    dependency.register(require('sequelize-fastify'), {
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

    dependency.register(autoload, {
      dir: path.join(__dirname, 'sequelize/models'),
    });
  }

  async initConnection(fastify) {
    await fastify.db.authenticate();
    await fastify.db.sync({ force: environment.app.dev });
  }
};
