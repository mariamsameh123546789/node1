const mongoose = require('mongoose');

const chaptersSchema = new mongoose.Schema({
  chapter_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    unique: true
  },
  text: {
    type: String,
    required: [true, 'Chapter text is required'],
    trim: true
  },
  count: {
    type: Number,
    required: [true, 'Count is required'],
    min: 0
    
  },

  is_completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Chapters', chaptersSchema);