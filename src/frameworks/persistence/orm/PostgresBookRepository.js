'use strict';

const BookRepository = require('../../../application/contracts/BookRepository');

module.exports = class PostgresUserRepository extends BookRepository {
  constructor(bookModel) {
    super(bookModel);
  }

  async addBook(book) {
    const addedBook = await this.bookModel.create(book);
    return addedBook;
  }

  async getById(bookId) {
    const searchedBook = await this.bookModel.findByPk(bookId);
    return searchedBook;
  }

  async getBookByTitle(title) {
    const searchedBook = await this.bookModel.findOne({
      where: { title: title },
    });
    return searchedBook;
  }

  async getAll(page, limit) {
    const searchedBooks = await this.bookModel.findAll({
      offset: page,
      limit: limit,
    });
    return searchedBooks;
  }

  async getCount() {
    const count = await this.bookModel.count();
    return count;
  }
};
