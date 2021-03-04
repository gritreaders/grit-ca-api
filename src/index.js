'use strict';

const createServer = require('./web/server');

const start = async () => {
  try {
    const server = await createServer();
    await server.start();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    // eslint-disable-next-line no-magic-numbers
    process.exit(1);
  }
};

start();
