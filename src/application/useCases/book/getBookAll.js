'use strict';

const paginatorRepository = require('../../../utils/paginatorRepository');

module.exports = (bookRepository) => {
  const execute = async (page, limit) => {
    const paginatedResults = await paginatorRepository(bookRepository).paginate(
      page,
      limit
    );
    return paginatedResults;
  };

  return {
    execute,
  };
};
