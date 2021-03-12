/* eslint-disable no-magic-numbers */
'use strict';

const { DataTypes } = require('sequelize');
const constants = require('../../../../utils/constants');

// eslint-disable-next-line no-unused-vars
module.exports = async (fastify, options) => {
  const { db } = fastify;

  await db.define(
    'book',
    {
      bookId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.BOOK.TITLE,
      },
      content: {
        type: DataTypes.STRING(200),
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.BOOK.CONTENT,
      },
      shortContent: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.BOOK.SHORT_CONTENT,
      },
      publisher: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.BOOK.PUBLISHER,
      },
      publisherAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.BOOK.PUBLISHER_AT,
      },
      pages: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.BOOK.PAGES,
      },
      language: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.BOOK.LANGUAGE,
      },
      detailsUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.BOOK.DETAILS_URL,
      },
      downloadUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.BOOK.DOWNLOAD_URL,
      },
      readOnlineUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.BOOK.READ_ONLINE_URL,
      },
      coverUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.COVER_URL,
      },
      thumbnailUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: constants.DEFAULT_VALUES.THUMBNAIL_URL,
      },
    },
    { timestamps: false }
  );
};
