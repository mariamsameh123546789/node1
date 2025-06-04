const mongoose = require('mongoose');

   const testanswersSchema = new mongoose.Schema({
     test_answers_id: {
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
     test_id: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Test',
       required: [true, 'Test ID is required']
     }
   });

   module.exports = mongoose.model('TestAnswers', testanswersSchema);