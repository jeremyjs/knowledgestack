'use strict';

// resource-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const resourceSchema = require('../../schemas/resource');

const resourceModel = mongoose.model('resource', resourceSchema);

module.exports = resourceModel;
