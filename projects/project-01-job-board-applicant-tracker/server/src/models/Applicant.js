const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    resumeUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Applicant', applicantSchema);
