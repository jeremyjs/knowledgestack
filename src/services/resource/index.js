'use strict';

const service = require('feathers-mongoose');
const resource = require('./resource-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: resource,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/resources', service(options));

  // Get our initialize service to that we can bind hooks
  const resourceService = app.service('/resources');

  // Set up our before hooks
  resourceService.before(hooks.before);

  // Set up our after hooks
  resourceService.after(hooks.after);
};
