'use strict';

const service = require('feathers-mongoose');
const topic = require('./topic-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: topic,
  };

  // Initialize our service with any options it requires
  app.use('/api/topics', service(options));

  // Get our initialize service to that we can bind hooks
  const topicService = app.service('/api/topics');

  // Set up our before hooks
  topicService.before(hooks.before);

  // Set up our after hooks
  topicService.after(hooks.after);
};
