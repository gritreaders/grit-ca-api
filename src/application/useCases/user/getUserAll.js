'use strict';

const paginatorRepository = require('../../../utils/paginatorRepository');

module.exports = (userRepository) => {
  async function execute(page, limit) {
    const paginatedResults = await paginatorRepository(userRepository).paginate(
      page,
      limit
    );
    return paginatedResults;
  }

  return {
    execute,
  };
};
