const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema({
  userId: { type: String, required: true, unique: true },
  history: { type: Array },
});

module.exports = mongoose.model('History', historySchema);
