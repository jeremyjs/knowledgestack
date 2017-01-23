const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Resource = require('../schemas/resource');

const curriculumSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  topicId: { type: String, required: true },
  ownerId: { type: String },
  resources: { type: [Resource], default: [] },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = curriculumSchema;
