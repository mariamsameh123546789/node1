const mongoose = require('mongoose');

const introSelectionSchema = new mongoose.Sche ma({
  selection_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    unique: true
  },
  text: {
    type: String,
    required: [true, 'Selection text is required'],
    trim: true
  },
  has_extra_text: {
    type: Boolean,
    default: false
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'IntroQuestion',
    required: [true, 'Question ID is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('IntroSelection', introSelectionSchema);