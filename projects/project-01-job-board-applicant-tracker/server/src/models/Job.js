const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, default: 'Full-time' },
    status: { type: String, default: 'Open' },
    description: { type: String },
    postedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', jobSchema);
