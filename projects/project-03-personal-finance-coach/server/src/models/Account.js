const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, default: 'Checking' },
    balance: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Account', accountSchema);
