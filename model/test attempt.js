const mongoose = require('mongoose');

   const testAttemptSchema = new mongoose.Schema({
     test_id: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Test',
       required: [true, 'Test ID is required']
     },
     user_id: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: [true, 'User ID is required']
     },
     score: {
       type: Number,
       required: [true, 'Score is required'],
       min: 0,
       max: 100
     },
     startdate: {
       type: Date,
       required: [true, 'Start date is required'],
       default: Date.now
     },
     enddate: {
       type: Date,
       required: false
     }
   });

   module.exports = mongoose.model('TestAttempt', testAttemptSchema);