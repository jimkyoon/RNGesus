const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// // database connection
// // dotenv for database info
// require('dotenv').config();
// // mongoose connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true },
//   (err) => {
//     if (err) console.log(err);
//     else console.log('Connected to the database!');
//   },
// );

const historySchema = new Schema({
  userId: { type: String, required: true, unique: true },
  history: { type: Array },
});

module.exports = mongoose.model('History', historySchema);
