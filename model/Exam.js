const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  exam_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    unique: true
  },
  text: {
    type: String,
    required: [true, 'Exam text is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Exam description is required'],
    trim: true
  },
  number_of_questions: {
    type: Number,
    required: [true, 'Number of questions is required'],
    min: 1
  },
  time: {
    type: Number, 
    required: [true, 'Exam time is required'],
    min: 1
  },
  is_completed: {
    type: Boolean,
    default: false
  }
  
});

module.exports = mongoose.model('Exam', examSchema);