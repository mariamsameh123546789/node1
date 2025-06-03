const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  mossion_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    unique: true
  },
  text: {
    type: String,
    required: [true, 'Mission text is required'],
    trim: true
  },
  is_completed: {
    type: Boolean,
    default: false
  },
  is_manually_Added: {
    type: Boolean,
    default: false
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  due_date: {
    type: Date,
    required: [true, 'Due date is required']
  }
});

module.exports = mongoose.model('Mission', missionSchema);
