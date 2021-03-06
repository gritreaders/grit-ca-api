'use strict';

const userController = require('../../../controllers/userController');

const userSchema = require('../schemas/user/userSchema');
const getUserByIdSchema = require('../schemas/user/getUserByIdSchema');
const getUserAllSchema = require('../schemas/user/getUserAllSchema');
const updateUserSchema = require('../schemas/user/updateUserSchema');
const deleteUserSchema = require('../schemas/user/deleteUserSchema');

const PostgresUserRepository = require('../../../frameworks/persistence/orm/PostgresUserRepository');

// eslint-disable-next-line no-unused-vars
const usersRouter = async (fastify, options) => {
  const controller = userController(
    new PostgresUserRepository(fastify.db.models.user)
  );

  await fastify.post(
    '/users',
    { preValidation: [fastify.authenticate], schema: userSchema },
    controller.addUser
  );
  await fastify.put(
    '/users/:id',
    { preValidation: [fastify.authenticate], schema: updateUserSchema },
    controller.updateUser
  );
  await fastify.delete(
    '/users/:id',
    { preValidation: [fastify.authenticate], schema: deleteUserSchema },
    controller.deleteUser
  );
  await fastify.get(
    '/users/:id',
    { schema: getUserByIdSchema },
    controller.getUserById
  );
  await fastify.get(
    '/users',
    { schema: getUserAllSchema },
    controller.getUserAll
  );
};

module.exports = usersRouter;
