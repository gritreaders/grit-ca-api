'use strict';

const addUser = require('../application/use_cases/users/addUser');

module.exports = (dependencies) => {
  const { userRepository } = dependencies.DatabaseService;

  const addNewUser = async (request, reply) => {
    const addUserCommand = addUser(userRepository);

    const { firstName, lastName, email } = request.body;

    try {
      const response = await addUserCommand.execute(firstName, lastName, email);

      reply.send(response);
    } catch (err) {
      reply.send(err);
    }
  };

  return {
    addNewUser,
  };
};
