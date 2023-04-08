const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  id:Number,
  name: String, 
  about: String, 
  email:String,
    interest:String}
);

module.exports = mongoose.model('user', UserSchema);
