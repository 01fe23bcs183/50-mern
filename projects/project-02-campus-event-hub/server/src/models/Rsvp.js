const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema(
  {
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    attendeeName: { type: String, required: true },
    attendeeEmail: { type: String, required: true },
    status: { type: String, default: 'Going' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Rsvp', rsvpSchema);
