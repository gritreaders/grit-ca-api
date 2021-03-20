/* eslint-disable no-unused-vars */
'use strict';

module.exports = class BookRepository {
  constructor(bookModel) {
    this.bookModel = bookModel;
  }

  getById(bookId) {
    return Promise.reject(new Error('not implemented'));
  }

  getBookByTitle(title) {
    return Promise.reject(new Error('not implemented'));
  }

  getAll(page, limit) {
    return Promise.reject(new Error('not implemented'));
  }

  getCount() {
    return Promise.reject(new Error('not implemented'));
  }
};
