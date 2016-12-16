const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true }, // TODO: Url

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
