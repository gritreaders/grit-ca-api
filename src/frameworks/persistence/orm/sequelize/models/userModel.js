'use strict';

const { DataTypes } = require('sequelize');
const constants = require('../../../../../config/constants');

module.exports = async (fastify, options) => {
  const { db } = fastify;

  db.define('user', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(125),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    avatarUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: constants.DEFAULT_VALUES.AVATAR_URL,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: constants.DEFAULT_VALUES.IS_ACTIVE,
    },
  });
};
