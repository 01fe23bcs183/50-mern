const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    quantity: { type: Number, default: 0 },
    reorderPoint: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);
