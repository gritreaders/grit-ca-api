'use strict';

const userController = require('../../../controllers/userController');
const authController = require('../../../controllers/authController');
const signUpUserSchema = require('../schemas/Users/userSchema');
const signInUserSchema = require('../schemas/auth/signInUserSchema');

const PostgresUserRepository = require('../../../frameworks/persistence/orm/postgresUserRepository');

const authRouter = async (fastify, options) => {
  const controllerUser = userController(
    new PostgresUserRepository(fastify.db.models.user)
  );
  const controllerAuth = authController(
    new PostgresUserRepository(fastify.db.models.user),
    fastify
  );

  fastify.post(
    '/auth/signup',
    { schema: signUpUserSchema },
    controllerUser.addUser
  );
  fastify.post(
    '/auth/signin',
    { schema: signInUserSchema },
    controllerAuth.signIn
  );

  fastify.post('/auth/recovery', controllerAuth.recoveryAccount);

  fastify.post('/auth/activate/:id', controllerAuth.activateAccount);
};

module.exports = authRouter;
