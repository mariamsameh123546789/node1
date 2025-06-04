const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
  slide_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    unique: true
  },
  text: {
    type: String,
    required: [true, 'Slide text is required'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Slide content is required'],
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
  domain_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Domain',
    required: [true, 'Domain ID is required']
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  }
});

module.exports = mongoose.model('Slide', slideSchema);
