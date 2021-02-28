'use strict';

const userController = require('../../../controllers/userController');

const usersRouter = async (fastify, options) => {
  const { user } = fastify.db.models;

  fastify.get('/users', async (request, reply) => {
    const usersSearched = await user.findAll();

    return usersSearched;
  });

  fastify.get('/users/:id', async (request, reply) => {
    const { id } = request.params;

    const userSearched = await user.findByPk(id);

    return userSearched;
  });

  fastify.post('/users', async (request, reply) => {
    const userCreated = await user.create(request.body);

    return userCreated;
  });

  fastify.put('/users/:id', async (request, reply) => {
    const { id } = request.params;
    const { firstName, lastName, avatarUrl, isActive } = request.body;

    const userSearched = await user.findByPk(id);

    userSearched.firstName = firstName || userSearched.firstName;
    userSearched.lastName = lastName || userSearched.lastName;
    userSearched.avatarUrl = avatarUrl || userSearched.avatarUrl;
    userSearched.isActive = isActive || userSearched.isActive;

    const userUpdated = await userSearched.update();

    return userUpdated;
  });

  fastify.delete('/users/:id', async (request, reply) => {
    const { id } = request.params;

    const userSearched = await user.findByPk(id);
    const userDeleted = await userSearched.destroy();

    return userDeleted;
  });
};

module.exports = usersRouter;
