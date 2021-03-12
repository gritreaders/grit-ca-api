'use strict';

const PostgresDatabaseService = require('../frameworks/persistence/orm/PostgresDatabaseService');

const constants = require('../utils/constants');
const environment = require('./environment');

module.exports = (() => {
  const serviceLocator = {};

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    serviceLocator.DatabaseService = new PostgresDatabaseService();
  }

  return serviceLocator;
})();
