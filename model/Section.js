const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  chapterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
    required: true,
  },
  title: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
  content: {
    text: {
      en: String,
      ar: String,
    },
    images: [String], 
    videos: [String], 
  },
  order: {
    type: Number, 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Section', SectionSchema);