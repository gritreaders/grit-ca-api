'use strict';

const userController = require('../../../controllers/userController');

const PostgresUserRepository = require('../../../frameworks/persistence/orm/postgresUserRepository');

// eslint-disable-next-line no-unused-vars
const usersRouter = async (fastify, options) => {
  const controller = userController(
    new PostgresUserRepository(fastify.db.models.user)
  );

  await fastify.post('/users', controller.addUser);
  await fastify.put('/users/:id', controller.updateUser);
  await fastify.delete('/users/:id', controller.deleteUser);
  await fastify.get('/users/getUserById/:id', controller.getUserById);
  await fastify.get('/users/getUserByEmail/:email', controller.getUserByEmail);
  await fastify.get('/users', controller.getUserAll);
};

module.exports = usersRouter;
