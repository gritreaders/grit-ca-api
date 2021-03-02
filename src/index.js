'use strict';

const createServer = require('./web/server');

const start = async () => {
  try {
    const server = await createServer();
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
