const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
  domain_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    unique: true
  },
  text: {
    type: String,
    required: [true, 'Domain text is required'],
    trim: true
  },
  count: {
    type: Number,
    required: [true, 'Count is required'],
    min: 0,
    max: 100
  },
  icon: {
    type: String,
    required: [true, 'Icon is required'],
    trim: true
  },

});

module.exports = mongoose.model('Domain', domainSchema);
