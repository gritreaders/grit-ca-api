'use strict';

const paginatorRepository = require('../../../utils/paginatorRepository');

module.exports = (bookRepository) => {
  const execute = async (page, limit) => {
    const previousPage = await paginatorRepository(bookRepository).previousPage(
      page,
      limit
    );
    const nextPage = await paginatorRepository(bookRepository).nextPage(
      page,
      limit
    );
    const paginatedData = await paginatorRepository(
      bookRepository
    ).paginatedData(page, limit);

    return {
      previous: previousPage,
      next: nextPage,
      data: paginatedData,
    };
  };

  return {
    execute,
  };
};
