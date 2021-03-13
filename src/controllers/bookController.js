/* eslint-disable no-magic-numbers */
'use strict';

const response = require('../utils/response');

const getBookByIdCommand = require('../application/useCases/book/getBookById');
const getBookAllCommand = require('../application/useCases/book/getBookAll');

module.exports = (bookRepository) => {
  const getBookById = async (request, reply) => {
    const { id } = request.params;

    // FIXME: no esta regresando user not found (it's for schema)
    const data = await getBookByIdCommand(bookRepository).execute(id);
    return response.success(request, reply, 200, 'Done', data);
  };

  const getBookAll = async (request, reply) => {
    const { page, limit } = request.query;

    const { previous, next, data } = await getBookAllCommand(
      bookRepository
    ).execute(page, limit);

    return response.success(request, reply, 200, 'Done', data, previous, next);
  };

  return {
    getBookById,
    getBookAll,
  };
};
