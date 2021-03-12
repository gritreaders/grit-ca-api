/* eslint-disable no-magic-numbers */
'use strict';

module.exports = (repository) => {
  const paginate = async (page, limit) => {
    let paginatedResults = {
      previous: {},
      next: {},
      data: [],
    };

    const rowsCount = await repository.getCount();

    let startIndex = 0;
    let endIndex = rowsCount;

    if (page > 0 && limit > 0) {
      startIndex = (page - 1) * limit;
      endIndex = page * limit;

      if (startIndex > 0) {
        paginatedResults.previous = {
          page: page - 1,
          limit: limit,
        };
      }

      if (endIndex < rowsCount) {
        paginatedResults.next = {
          page: page + 1,
          limit: limit,
        };
      }
    }

    paginatedResults.data = await repository.getAll(startIndex, endIndex);

    return paginatedResults;
  };

  return {
    paginate,
  };
};
