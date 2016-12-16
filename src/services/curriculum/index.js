'use strict';

const service = require('feathers-mongoose');
const curriculum = require('./curriculum-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: curriculum,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/curriculums', service(options));

  // Get our initialize service to that we can bind hooks
  const curriculumService = app.service('/curriculums');

  // Set up our before hooks
  curriculumService.before(hooks.before);

  // Set up our after hooks
  curriculumService.after(hooks.after);
};
