const mongoose = require('mongoose');

const slideAttemptsSchema = new mongoose.Schema({
  slide_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Slide',
    required: [true, 'Slide ID is required']
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  start_date: {
    type: Date,
    required: [true, 'Start date is required'],
    default: Date.now
  },
  end: {
    type: Date,
    required: false 
  }
});

module.exports = mongoose.model('SlideAttempts', slideAttemptsSchema);