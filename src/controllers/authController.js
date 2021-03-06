'use strict';

const { compare } = require('../frameworks/common/encryptor');
const apiError = require('../frameworks/common/apiError');

const getUserByEmailCommand = require('../application/use_cases/user/getUserByEmail');

module.exports = (userRepository, fastify) => {
  /* -------------------------------------------------------------------------- */
  /*                                   Sign In                                  */
  /* -------------------------------------------------------------------------- */

  const signIn = async (request, reply) => {
    const { email, password } = request.body;
    try {
      // does the user exist?
      const user = await getUserByEmailCommand(userRepository).execute(email);

      if (!user.message) {
        const payload = { ...user.dataValues };
        const passwordIsValid = await compare(password, payload.password);
        if (passwordIsValid) {
          const token = fastify.jwt.sign(payload);
          payload.token = token;
          return reply.code(200).send(payload);
        }
      } else {
        throw new apiError(401, user.message);
      }
    } catch (err) {
      return reply.send(err);
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                              Activate Account                              */
  /* -------------------------------------------------------------------------- */
  const activateAccount = async (request, repply) => {};

  /* -------------------------------------------------------------------------- */
  /*                               RecoveryAccount                              */
  /* -------------------------------------------------------------------------- */

  const recoveryAccount = async (request, repply) => {};
  return {
    signIn,
    activateAccount,
    recoveryAccount,
  };
};
