const mongoose = require('mongoose');

   const testSchema = new mongoose.Schema({
     test_id: {
       type: mongoose.Schema.Types.ObjectId,
       default: mongoose.Types.ObjectId,
       unique: true
     },
     question: {
       type: String,
       required: [true, 'Question text is required'],
       trim: true
     },
     slide_id: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Slide',
       required: [true, 'Slide ID is required']
     }
   });

   module.exports = mongoose.model('Test', testSchema);