'use strict';

const { compare } = require('../utils/encryptor');
const apiError = require('../utils/apiError');

const getUserByEmailCommand = require('../application/useCases/user/getUserByEmail');

module.exports = (userRepository, fastify) => {
  const signIn = async (request, reply) => {
    const { email, password } = request.body;
    try {
      const user = await getUserByEmailCommand(userRepository).execute(email);

      if (!user.message) {
        const payload = { ...user.dataValues };
        const passwordIsValid = await compare(password, payload.password);
        if (passwordIsValid) {
          const token = fastify.jwt.sign(payload);
          payload.token = token;
          // eslint-disable-next-line no-magic-numbers
          return reply.code(200).send(payload);
        }
        // eslint-disable-next-line no-magic-numbers
        throw new apiError(401, 'wrong credentials');
      } else {
        // eslint-disable-next-line no-magic-numbers
        throw new apiError(401, user.message);
      }
    } catch (err) {
      return reply.send(err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  const activateAccount = async (request, reply) => {};
  // eslint-disable-next-line no-unused-vars
  const recoveryAccount = async (request, reply) => {};

  return {
    signIn,
    activateAccount,
    recoveryAccount,
  };
};
