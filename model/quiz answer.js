const mongoose = require('mongoose');

const answersSchema = new mongoose.Schema({
  answers_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    unique: true
  },
  text: {
    type: String,
    required: [true, 'Answer text is required'],
    trim: true
  },
  is_correct: {
    type: Boolean,
    required: [true, 'Is correct is required']
  },
  quiz_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: [true, 'Quiz ID is required']
  }
});

module.exports = mongoose.model('Answers', answersSchema);