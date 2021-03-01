'use strict';

const UserEntity = require('../entities/userEntity');

const addUserCommand = require('../application/use_cases/users/addUser');
const updateUserCommand = require('../application/use_cases/users/updateUser');
const deleteUserCommand = require('../application/use_cases/users/deleteUser');
const getUserByIdCommand = require('../application/use_cases/users/getUserById');
const getUserByEmailCommand = require('../application/use_cases/users/getUserByEmail');
const getUserAllCommand = require('../application/use_cases/users/getUserAll');

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
        new UserEntity(
          firstName,
          lastName,
          email,
          password,
          avatarUrl,
          isActive
        )
      );

      reply.send(response);
    } catch (err) {
      reply.send(err);
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
        new UserEntity(
          firstName,
          lastName,
          email,
          password,
          avatarUrl,
          isActive
        )
      );

      reply.send(response);
    } catch (err) {
      reply.send(err);
    }
  };

  const deleteUser = async (request, reply) => {
    const { id } = request.params;

    try {
      const response = await deleteUserCommand(userRepository).execute(id);

      reply.send(response);
    } catch (err) {
      reply.send(err);
    }
  };

  const getUserById = async (request, reply) => {
    const { id } = request.params;

    try {
      const response = await getUserByIdCommand(userRepository).execute(id);

      reply.send(response);
    } catch (err) {
      reply.send(err);
    }
  };

  const getUserByEmail = async (request, reply) => {
    const { email } = request.params;

    try {
      const response = await getUserByEmailCommand(userRepository).execute(
        email
      );

      reply.send(response);
    } catch (err) {
      reply.send(err);
    }
  };

  const getUserAll = async (request, reply) => {
    try {
      const response = await getUserAllCommand(userRepository).execute();

      reply.send(response);
    } catch (err) {
      reply.send(err);
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
