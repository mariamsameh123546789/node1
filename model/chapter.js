const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  domainId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Domain',
    required: true,
  },
  title: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
  sections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Section',
    },
  ], 
  order: {
    type: Number, 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Chapter', ChapterSchema);