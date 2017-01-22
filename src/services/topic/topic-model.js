'use strict';

// topic-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
});

const topicModel = mongoose.model('topic', topicSchema);

module.exports = topicModel;
