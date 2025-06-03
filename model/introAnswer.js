const mongoose = require('mongoose');

const introAnswerSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'IntroQuestion',
    required: [true, 'Question ID is required']
  },
  selection_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'IntroSelection',
    required: [true, 'Selection ID is required']
  },
  extra_text: {
    type: String,
    default: null,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('IntroAnswer', introAnswerSchema);