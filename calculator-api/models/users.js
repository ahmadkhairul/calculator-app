const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
  username: { required: true, type: String },
  password: { required: true, type: String }
})

module.exports = mongoose.model('users', usersSchema)
