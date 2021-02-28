'use strict';

require('dotenv-safe').config();

module.exports = (() => {
  const environment = {
    app: {
      environment: process.env.NODE_ENV,
      dev: process.env.NODE_ENV !== 'production',
      port: process.env.PORT,
    },
    database: {
      dialect: process.env.DATABASE_DIALECT,
      host: process.env.DATABASE_HOST,
      name: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      encrypt: process.env.DATABASE_ENCRYPT,
      trustedConnection: process.DATABASE_TRUSTED_CONNECTION,
      requestTimeOut: process.env.DATABASE_REQUEST_TIME_OUT,
    },
  };

  return environment;
})();
