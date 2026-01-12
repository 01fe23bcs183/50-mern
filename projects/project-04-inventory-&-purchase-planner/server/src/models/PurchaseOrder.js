const mongoose = require('mongoose');

const purchaseItemSchema = new mongoose.Schema(
  {
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    quantity: { type: Number, required: true },
    cost: { type: Number, default: 0 },
  },
  { _id: false }
);

const purchaseOrderSchema = new mongoose.Schema(
  {
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
    status: { type: String, default: 'Draft' },
    expectedDate: { type: Date },
    items: { type: [purchaseItemSchema], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema);
