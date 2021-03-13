/* eslint-disable no-magic-numbers */
'use strict';

module.exports = (repository) => {
  const validatePageAndLimit = (page, limit) => {
    return page > 0 && limit > 0;
  };

  const calculateStartIndex = (page, limit) => {
    let startIndex = 0;

    if (validatePageAndLimit(page, limit)) {
      startIndex = (page - 1) * limit;
    }

    return startIndex;
  };

  const calculateEndIndex = async (page, limit) => {
    let endIndex = await repository.getCount();

    if (validatePageAndLimit(page, limit)) {
      endIndex = page * limit;
    }

    return endIndex;
  };

  const paginatedData = async (page, limit) => {
    const startIndex = await calculateStartIndex(page, limit);
    const endIndex = await calculateEndIndex(page, limit);
    const data = await repository.getAll(startIndex, endIndex);

    return data;
  };

  const previousPage = async (page, limit) => {
    let previous = {};

    const startIndex = await calculateStartIndex(page, limit);

    if (startIndex > 0) {
      previous = {
        page: page - 1,
        limit: limit,
      };
    }

    return previous;
  };

  const nextPage = async (page, limit) => {
    let next = {};

    const endIndex = await calculateEndIndex(page, limit);

    if (endIndex < (await repository.getCount())) {
      next = {
        page: page + 1,
        limit: limit,
      };
    }

    return next;
  };

  return {
    paginatedData,
    previousPage,
    nextPage,
  };
};
