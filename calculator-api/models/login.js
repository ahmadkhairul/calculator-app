const mongoose = require('mongoose');
const loginsSchema = new mongoose.Schema({
  username: { required: true, type: String },
  status: { required: true, type: Boolean },
  createdAt: { required: true, type: Date },
  logoutTime: { required: true, type: Date }
})

module.exports = mongoose.model('logins', loginsSchema)
