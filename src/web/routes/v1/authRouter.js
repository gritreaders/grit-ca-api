'use strict';

const signUpUserSchema = require('../schemas/user/userSchema');
const signInUserSchema = require('../schemas/auth/signInUserSchema');

const userController = require('../../../controllers/userController');
const authController = require('../../../controllers/authController');

const PostgresUserRepository = require('../../../frameworks/persistence/orm/PostgresUserRepository');

// eslint-disable-next-line no-unused-vars
const authRouter = async (fastify, options) => {
  const controllerUser = userController(
    new PostgresUserRepository(fastify.db.models.user)
  );
  const controllerAuth = authController(
    new PostgresUserRepository(fastify.db.models.user),
    fastify
  );

  await fastify.post(
    '/auth/signUp',
    { schema: signUpUserSchema },
    controllerUser.addUser
  );
  await fastify.post(
    '/auth/signIn',
    { schema: signInUserSchema },
    controllerAuth.signIn
  );

  await fastify.post('/auth/recovery', controllerAuth.recoveryAccount);

  await fastify.post('/auth/activate/:id', controllerAuth.activateAccount);
};

module.exports = authRouter;
