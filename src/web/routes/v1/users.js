'use strict';

const userController = require('../../../controllers/userController');

const PostgresUserRepository = require('../../../frameworks/persistence/orm/postgresUserRepository');

// eslint-disable-next-line no-unused-vars
const usersRouter = (fastify, options) => {
  const controller = userController(
    new PostgresUserRepository(fastify.db.models.user)
  );

  fastify.post('/users', controller.addUser);
  fastify.put('/users/:id', controller.updateUser);
  fastify.delete('/users/:id', controller.deleteUser);
  fastify.get('/users/getUserById/:id', controller.getUserById);
  fastify.get('/users/getUserByEmail/:email', controller.getUserByEmail);
  fastify.get('/users', controller.getUserAll);
};

module.exports = usersRouter;
