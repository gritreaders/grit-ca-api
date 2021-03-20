/* eslint-disable no-magic-numbers */
'use strict';

const Book = require('../entities/Book');

const addBookCommand = require('../application/useCases/book/addBook');
const getBookByIdCommand = require('../application/useCases/book/getBookById');
const getBookByTitleCommand = require('../application/useCases/book/getBookByTitle');
const getBookAllCommand = require('../application/useCases/book/getBookAll');

module.exports = (bookRepository) => {
  const addBook = async (request, reply) => {
    const {
      title,
      content,
      shortContent,
      publisher,
      publisherAt,
      pages,
      language,
      detailsUrl,
      downloadUrl,
      readOnlineUrl,
      coverUrl,
      thumbnailUrl,
    } = request.body;

    try {
      const response = await addBookCommand(bookRepository).execute(
        new Book(
          title,
          content,
          shortContent,
          publisher,
          publisherAt,
          pages,
          language,
          detailsUrl,
          downloadUrl,
          readOnlineUrl,
          coverUrl,
          thumbnailUrl
        )
      );

      return reply.code(201).send(response);
    } catch (err) {
      return reply.send(err);
    }
  };

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

  const getBookByTitle = async (request, reply) => {
    const { title } = request.params;

    try {
      const response = await getBookByTitleCommand(bookRepository).execute(
        title
      );

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
    addBook,
    getBookById,
    getBookByTitle,
    getBookAll,
  };
};
