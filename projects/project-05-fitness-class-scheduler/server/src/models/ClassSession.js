const mongoose = require('mongoose');

const classSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
    startTime: { type: Date, required: true },
    duration: { type: Number, default: 60 },
    capacity: { type: Number, default: 10 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ClassSession', classSchema);
