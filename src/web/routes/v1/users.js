'use strict';

const userController = require('../../../controllers/userController');
const PostgresUserRepository = require('../../../frameworks/persistence/orm/postgresUserRepository');

// Schemas
const userSchema = require('../schemas/Users/userSchema');
const getUserByIdSchema = require('../schemas/Users/getUserByIdSchema');
const updateUserSchema = require('../schemas/Users/updateUserSchema');
const deleteUserSchema = require('../schemas/Users/deleteUserSchema');

// eslint-disable-next-line no-unused-vars
const usersRouter = async (fastify, options) => {
  const controller = userController(
    new PostgresUserRepository(fastify.db.models.user)
  );

  await fastify.post('/users', { schema: userSchema }, controller.addUser);
  await fastify.put(
    '/users/:id',
    { schema: updateUserSchema },
    controller.updateUser
  );
  await fastify.delete(
    '/users/:id',
    { schema: deleteUserSchema },
    controller.deleteUser
  );
  await fastify.get(
    '/users/getUserById/:id',
    { schema: getUserByIdSchema },
    controller.getUserById
  );
  await fastify.get('/users/getUserByEmail/:email', controller.getUserByEmail);
  await fastify.get(
    '/users',
    {
      preValidation: [fastify.authenticate],
    },
    controller.getUserAll
  );
};

module.exports = usersRouter;
