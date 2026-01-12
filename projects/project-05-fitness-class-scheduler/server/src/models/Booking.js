const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    classSession: { type: mongoose.Schema.Types.ObjectId, ref: 'ClassSession', required: true },
    memberName: { type: String, required: true },
    memberEmail: { type: String, required: true },
    status: { type: String, default: 'Booked' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
