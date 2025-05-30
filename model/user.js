const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
  phone: {
    type: String,
    trim: true,
    default: null,
  },
  profilePicture: {
    type: String,
    default: null,
  },
  language: {
    type: String,
    enum: ['en', 'ar'],
    default: 'ar',
  },
   role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },

  provider: {
    type: String,
    enum: ['google', 'apple'],
    default: null,
  },
  providerId: {
    type: String,
    default: null,
  },
  verificationCode: {
    code: String,
    expiresAt: Date,
  },
  progress: [
    {
      domainId: { type: mongoose.Schema.Types.ObjectId, ref: 'Domain' },
      chapterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },
      sectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Section' },
      completed: { type: Boolean, default: false },
      completedAt: { type: Date },
    },
  ],
  examHistory: [
    {
      examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' },
      score: Number,
      passStatus: { type: Boolean },
      answers: [
        {
          questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam.questions' },
          selectedOption: Number,
          correct: Boolean,
        },
      ],
      completedAt: { type: Date },
    },
  ],
  certificates: [
    {
      certificateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Certificate' },
      courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Domain' },
      date: { type: Date, default: Date.now },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};


UserSchema.methods.calculateChapterProgress = function(chapterId) {
  const sectionsCompleted = this.progress.filter(
    p => p.chapterId.equals(chapterId) && p.completed
  ).length;

};
module.exports = mongoose.model('User', UserSchema);