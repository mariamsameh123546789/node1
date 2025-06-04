const mongoose = require('mongoose');

const LessonsChapterSchema = new mongoose.Schema({
  lesson_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    unique: true
  },
  text: {
    type: String,
    required: [true, 'Lesson text is required'],
    trim: true
  },
  is_completed: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    required: [true, 'Count is required'],
    min: 0
  },
  chapter_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapters',
    required: [true, 'Chapter ID is required']
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  
});

module.exports = mongoose.model('Lessons', LessonsChapterSchema);
