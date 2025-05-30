const mongoose = require('mongoose');

const DomainSchema = new mongoose.Schema({
  name: {
    en: { type: String, required: true }, 
    ar: { type: String, required: true }, 
  },
  icon: {
    type: String, 
    required: true,
  },
  description: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chapter',
    },
  ], 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Domain', DomainSchema);