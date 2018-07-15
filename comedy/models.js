'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ComedySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {type: String, default: ''},
  url: {
    type: String, 
    required: true
  }
});

ComedySchema.methods.serialize = function() {
  return {
    title: this.title || '',
    subTitle: this.subTitle || '',
    url: this.url || ''
  };
};

const Comedy = mongoose.model('Comedy', ComedySchema);

module.exports = {Comedy};
