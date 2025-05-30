const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
  questions: [
    {
      text: {
        en: String,
        ar: String,
      },
      options: [
        {
          en: String,
          ar: String,
        },
      ],
      correctAnswer: {
        type: Number,
        required: true,
      },
    },
  ],
  duration: {
    type: Number,
    required: true,
  },

  examType: {
    type: String,
    enum: ['domain', 'chapter', 'final'],
    required: true
  },
  relatedId: { 
    type: mongoose.Schema.Types.ObjectId
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Exam', ExamSchema);