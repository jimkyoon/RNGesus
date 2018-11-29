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

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now },
});

module.exports = mongoose.model('Session', sessionSchema);
