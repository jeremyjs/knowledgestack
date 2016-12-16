const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Resource = require('../schemas/resource');

const curriculumSchema = new Schema({
  topicId: { type: String, required: true },
  resources: { type: [Resource], required: true },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = curriculumSchema;
