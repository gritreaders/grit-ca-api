'use strict';

const autoload = require('fastify-autoload');
const path = require('path');

const DatabaseService = require('../../../application/contracts/DatabaseService');

const constants = require('../../../utils/constants');

const environment = require('../../../config/environment');

module.exports = class PostgresDatabaseService extends DatabaseService {
  constructor() {
    super();
  }

  async init(server) {
    const sequelizeOptions = {
      dialect: environment.database.dialect,
      database: environment.database.name,
      host: environment.database.host,
      username: environment.database.username,
      password: environment.database.password,
    };

    if (environment.database.native) {
      sequelizeOptions.native = environment.database.native;
    }

    await server.register(require('sequelize-fastify'), {
      instance: constants.SUPPORTED_ORM.INSTANCE,
      sequelizeOptions,
    });

    await server.register(autoload, {
      dir: path.join(__dirname, '/models'),
    });
  }

  async connect(server) {
    await server.db.authenticate();
    await server.db.sync({
      force: environment.database.sync,
    });
  }
};
