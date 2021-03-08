'use strict';

const PostgresDatabaseService = require('../frameworks/persistence/orm/postgresDatabaseService');

const constants = require('../utils/constants');
const environment = require('./environment');

const buildBeans = () => {
  const beans = {};

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    beans.DatabaseService = new PostgresDatabaseService();
  }

  return beans;
};

module.exports = buildBeans();
