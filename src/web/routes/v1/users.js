'use strict';

const userController = require('../../../controllers/userController');
const PostgresUserRepository = require('../../../frameworks/persistence/orm/postgresUserRepository');

// Schemas
const userSchema = require('../schemas/Users/userSchema');
const getUserByIdSchema = require('../schemas/Users/getUserByIdSchema');
const updateUserSchema = require('../schemas/Users/updateUserSchema');
const deleteUserSchema = require('../schemas/Users/deleteUserSchema');

const usersRouter = async (fastify, options) => {
  const controller = userController(
    new PostgresUserRepository(fastify.db.models.user)
  );

  fastify.post('/users', { schema: userSchema }, controller.addUser);
  fastify.put(
    '/users/:id',
    { schema: updateUserSchema },
    controller.updateUser
  );
  fastify.delete(
    '/users/:id',
    { schema: deleteUserSchema },
    controller.deleteUser
  );
  fastify.get(
    '/users/getUserById/:id',
    { schema: getUserByIdSchema },
    controller.getUserById
  );
  fastify.get('/users/getUserByEmail/:email', controller.getUserByEmail);
  fastify.get(
    '/users',
    {
      preValidation: [fastify.authenticate],
    },
    controller.getUserAll
  );
};

module.exports = usersRouter;
