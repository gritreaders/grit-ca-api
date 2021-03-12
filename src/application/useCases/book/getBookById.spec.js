/* eslint-disable no-undef */
'use strict';

const {
  getFirst,
  BookRepositoryMock,
} = require('../../../mocks/BookRepositoryMock');

const getBookByIdCommand = require('./getBookById');

describe('getBookById', () => {
  const bookRepository = new BookRepositoryMock();
  describe('book id not suplied', () => {
    it(`give an invalid bookId, then the function must return an object with value 'book id not supplied' in property message`, async () => {
      const messageExpected = { message: 'book id not supplied' };

      const messageActual = await getBookByIdCommand(bookRepository).execute();

      expect(messageActual).toStrictEqual(messageExpected);
    });
  });
  describe('getting book filtered by bookId', () => {
    it('give an bookId, then the function must return an book', async () => {
      const bookExpected = getFirst();

      const bookActual = await getBookByIdCommand(bookRepository).execute(
        bookExpected.bookId
      );

      expect(bookActual).toStrictEqual(bookExpected);
    });
  });
});
