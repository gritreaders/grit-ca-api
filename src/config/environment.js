'use strict';

require('dotenv-safe').config();

module.exports = (() => {
  const environment = {
    app: {
      environment: process.env.NODE_ENV,
      dev:
        process.env.NODE_ENV === 'development' &&
        process.env.DATABASE_HOST === 'localhost',
      port: process.env.PORT,
      host: process.env.HOST,
      jwt: {
        secret: process.env.JWT_SECRET,
      },
    },
    database: {
      dialect: process.env.DATABASE_DIALECT,
      host: process.env.DATABASE_HOST,
      name: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      native: process.env.DATABASE_NATIVE,
      sync:
        process.env.DATABASE_SYNC === true &&
        process.env.NODE_ENV !== 'production',
    },
  };

  return environment;
})();
