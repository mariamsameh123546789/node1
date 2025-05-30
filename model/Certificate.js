const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Domain',
    required: true,
  },
  title: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  downloadUrl: {
    type: String,
  },

  conditions: {
    minScore: Number,
    completedSections: Number
  }
});

module.exports = mongoose.model('Certificate', CertificateSchema);