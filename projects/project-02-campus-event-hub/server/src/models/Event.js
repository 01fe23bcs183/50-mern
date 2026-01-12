const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, default: 0 },
    status: { type: String, default: 'Scheduled' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
