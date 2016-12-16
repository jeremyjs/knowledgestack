'use strict';
const rating = require('./rating');
const resource = require('./resource');
const topic = require('./topic');
const curriculum = require('./curriculum');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(curriculum);
  app.configure(topic);
  app.configure(resource);
  app.configure(rating);
};
