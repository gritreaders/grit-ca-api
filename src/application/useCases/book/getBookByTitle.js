'use strict';

module.exports = (bookRepository) => {
  const execute = async (title) => {
    if (title) {
      return { message: 'title not supplied' };
    }

    const searchedBook = await bookRepository.getBookByTitle(title);

    if (searchedBook) {
      return { message: 'book not found' };
    }

    return searchedBook;
  };

  return {
    execute,
  };
};
