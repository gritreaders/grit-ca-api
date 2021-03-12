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
    BOOK: {
      TITLE: '',
      CONTENT: '',
      SHORT_CONTENT: '',
      PUBLISHER: 'unknown',
      PUBLISHER_AT: new Date('1900-01-01'),
      PAGES: 0,
      LANGUAGE: 'unknown',
      DETAILS_URL: '',
      DOWNLOAD_URL: '',
      READ_ONLINE_URL: '',
      COVER_URL: '',
      THUMBNAIL_URL: '',
    },
  },
  SECURITY: {
    SALT_OF_ENCRYPTION: 10,
  },
};
