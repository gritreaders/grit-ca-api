'use strict';

const autoload = require('fastify-autoload');
const path = require('path');

const DatabaseService = require('../../../application/contracts/databaseService');

const environment = require('../../../config/environment');
const constants = require('../../../config/constants');

module.exports = class PostgresDatabaseService extends DatabaseService {
  constructor() {
    super();
  }

  async init(server) {
    server.register(require('sequelize-fastify'), {
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

    server.register(autoload, {
      dir: path.join(__dirname, 'sequelize/models'),
    });
  }

  async connect(server) {
    await server.db.authenticate();
    await server.db.sync({
      force: environment.app.dev,
    });
  }
};
