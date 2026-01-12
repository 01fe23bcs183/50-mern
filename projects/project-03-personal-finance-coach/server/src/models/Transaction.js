const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
    amount: { type: Number, required: true },
    type: { type: String, default: 'Expense' },
    category: { type: String, default: 'General' },
    date: { type: Date, default: Date.now },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', transactionSchema);
