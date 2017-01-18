const service = require('feathers-mongoose');
const resource = require('./resource-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: resource,
  };

  app.use('/api/resources', service(options));

  const resourceService = app.service('/api/resources');

  resourceService.before(hooks.before);
  resourceService.after(hooks.after);
};
