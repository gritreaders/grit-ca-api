/* eslint-disable no-magic-numbers */
'use strict';

const User = require('../entities/User');

const addUserCommand = require('../application/useCases/user/addUser');
const updateUserCommand = require('../application/useCases/user/updateUser');
const deleteUserCommand = require('../application/useCases/user/deleteUser');
const getUserByIdCommand = require('../application/useCases/user/getUserById');
const getUserByEmailCommand = require('../application/useCases/user/getUserByEmail');
const getUserAllCommand = require('../application/useCases/user/getUserAll');

module.exports = (userRepository) => {
  const addUser = async (request, reply) => {
    const {
      firstName,
      lastName,
      email,
      password,
      avatarUrl,
      isActive,
    } = request.body;

    try {
      const response = await addUserCommand(userRepository).execute(
        new User(firstName, lastName, email, password, avatarUrl, isActive)
      );

      return reply.code(201).send(response);
    } catch (err) {
      return reply.send(err);
    }
  };

  const updateUser = async (request, reply) => {
    const { id } = request.params;
    const {
      firstName,
      lastName,
      email,
      password,
      avatarUrl,
      isActive,
    } = request.body;

    try {
      const response = await updateUserCommand(userRepository).execute(
        id,
        new User(firstName, lastName, email, password, avatarUrl, isActive)
      );

      return reply.send(response);
    } catch (err) {
      return reply.send(err);
    }
  };

  const deleteUser = async (request, reply) => {
    const { id } = request.params;

    try {
      const response = await deleteUserCommand(userRepository).execute(id);

      return reply.send(response);
    } catch (err) {
      return reply.send(err);
    }
  };

  const getUserById = async (request, reply) => {
    const { id } = request.params;

    try {
      const response = await getUserByIdCommand(userRepository).execute(id);
      return reply.code(200).send(response);
    } catch (err) {
      return reply.send(err);
    }
  };

  const getUserByEmail = async (request, reply) => {
    const { email } = request.params;

    try {
      const response = await getUserByEmailCommand(userRepository).execute(
        email
      );

      return reply.code(200).send(response);
    } catch (err) {
      return reply.send(err);
    }
  };

  const getUserAll = async (request, reply) => {
    try {
      const response = await getUserAllCommand(userRepository).execute();

      return reply.code(200).send(response);
    } catch (err) {
      return reply.send(err);
    }
  };

  return {
    addUser,
    updateUser,
    deleteUser,
    getUserById,
    getUserByEmail,
    getUserAll,
  };
};
