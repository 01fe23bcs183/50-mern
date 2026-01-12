const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
    status: { type: String, default: 'Active' },
    stage: { type: String, default: 'Applied' },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Application', applicationSchema);
