'use strict';

const PostgresDatabaseService = require('../frameworks/persistence/orm/postgresDatabaseService');

module.exports = (() => {
  return {
    DatabaseService: new PostgresDatabaseService(),
  };
})();
