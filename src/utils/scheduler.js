'use strict';

const { SimpleIntervalJob, AsyncTask } = require('toad-scheduler');

// eslint-disable-next-line no-unused-vars
module.exports = async (fastify, options) => {
  await fastify.register(require('fastify-schedule').fastifySchedule);

  const task = new AsyncTask(
    'simple task',
    () => {
      return Promise.resolve(fastify.log.info('an simple task'));
    },
    (err) => {
      return fastify.log.error(err);
    }
  );

  const job = new SimpleIntervalJob({ minutes: 1 }, task);

  fastify.scheduler.addSimpleIntervalJob(job);
};
