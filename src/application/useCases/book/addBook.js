'use strict';

module.exports = (bookRepository) => {
  const execute = async (book) => {
    if (!book) {
      return { message: 'value not valid' };
    }

    const searchedBook = await bookRepository.getBookByTitle(book.title);

    if (searchedBook) {
      return { message: 'book already register' };
    }

    const addedBook = await bookRepository.add(book);

    return addedBook;
  };

  return {
    execute,
  };
};
