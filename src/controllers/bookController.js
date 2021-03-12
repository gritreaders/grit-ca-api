/* eslint-disable no-magic-numbers */
'use strict';

const getBookByIdCommand = require('../application/useCases/book/getBookById');
const getBookAllCommand = require('../application/useCases/book/getBookAll');

module.exports = (bookRepository) => {
  const getBookById = async (request, reply) => {
    const { id } = request.params;

    try {
      const response = await getBookByIdCommand(bookRepository).execute(id);
      // TODO: no esta regresando user not found
      return reply.send(response);
    } catch (err) {
      return reply.send(err);
    }
  };

  const getBookAll = async (request, reply) => {
    const { page, limit } = request.query;

    try {
      const response = await getBookAllCommand(bookRepository).execute(
        page,
        limit
      );
      return reply.send(response);
    } catch (err) {
      return reply.send(err);
    }
  };

  return {
    getBookById,
    getBookAll,
  };
};
