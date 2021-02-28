'use strict';

module.exports = {
  SUPPORTED_DATABASE: {
    IN_MEMORY: 'in-memory',
    MONGO: 'mongo',
    POSTGRES: 'postgres',
    SQLITE: 'sqlite',
  },
  SUPPORTED_ORM: {
    INSTANCE: 'db',
  },
  DEFAULT_VALUES: {
    AVATAR_URL:
      'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
    IS_ACTIVE: false,
  },
};
