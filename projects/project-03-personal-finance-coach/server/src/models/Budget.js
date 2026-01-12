const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    limit: { type: Number, required: true },
    period: { type: String, default: 'Monthly' },
    spent: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Budget', budgetSchema);
