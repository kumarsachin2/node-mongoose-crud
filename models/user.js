const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  birth_date:{
      type:  String,
      required: true
  },
  street: {
      type: String,
      required: true
  },
  street_number: {
      type: String,
      required: true
  },
  city: {
      type: String,
      required: true
  },
  country: {
    type: String,
    required: true
  },
  token:{
    type: String,
    required: false
  },
password: {
    type: String,
    required: true
  }
},
 {timestamps: true});

module.exports = mongoose.model('Signup', UserSchema);