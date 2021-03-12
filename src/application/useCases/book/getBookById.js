'use strict';

module.exports = (bookRepository) => {
  const execute = async (bookId) => {
    if (!bookId) {
      return { message: 'book id not supplied' };
    }

    const searchedBook = await bookRepository.getById(bookId);

    if (!searchedBook) {
      return { message: 'book not found' };
    }

    return searchedBook;
  };

  return {
    execute,
  };
};
