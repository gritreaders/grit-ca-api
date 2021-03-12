'use strict';

const bookController = require('../../../controllers/bookController');

const getBookByIdSchema = require('../schemas/book/getBookByIdSchema');
const getBookAllSchema = require('../schemas/book/getBookAllSchema');

// const PostgresBookRepository = require('../../../frameworks/persistence/orm/PostgresBookRepository');
const { BookRepositoryMock } = require('../../../mocks/BookRepositoryMock');

// eslint-disable-next-line no-unused-vars
const bookRouter = async (fastify, options) => {
  const controller = bookController(
    new BookRepositoryMock(fastify.db.models.book)
  );

  await fastify.get(
    '/books/:id',
    { schema: getBookByIdSchema },
    controller.getBookById
  );

  await fastify.get(
    '/books',
    { schema: getBookAllSchema },
    controller.getBookAll
  );
};

module.exports = bookRouter;
