'use strict';

// curriculum-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const curriculumSchema = require('../../schemas/curriculum');

const curriculumModel = mongoose.model('curriculum', curriculumSchema);

module.exports = curriculumModel;
