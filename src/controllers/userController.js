'use strict';

const User = require('../entities/user');

const addUserCommand = require('../application/use_cases/user/addUser');
const updateUserCommand = require('../application/use_cases/user/updateUser');
const deleteUserCommand = require('../application/use_cases/user/deleteUser');
const getUserByIdCommand = require('../application/use_cases/user/getUserById');
const getUserByEmailCommand = require('../application/use_cases/user/getUserByEmail');
const getUserAllCommand = require('../application/use_cases/user/getUserAll');

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

      return reply.send(response);
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

      return reply.send(response);
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

      return reply.send(response);
    } catch (err) {
      return reply.send(err);
    }
  };

  const getUserAll = async (request, reply) => {
    try {
      const response = await getUserAllCommand(userRepository).execute();

      return reply.send(response);
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
