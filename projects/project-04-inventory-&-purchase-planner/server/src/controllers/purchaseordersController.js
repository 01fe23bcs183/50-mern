const PurchaseOrder = require('../models/PurchaseOrder');

const listItems = async (req, res) => {
  const items = await PurchaseOrder.find().sort({ createdAt: -1 });
  res.json(items);
};

const getItem = async (req, res) => {
  const item = await PurchaseOrder.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'PurchaseOrder not found' });
  }
  return res.json(item);
};

const normalizeItems = (payload) => {
  if (typeof payload.items === 'string' && payload.items.trim()) {
    try {
      return { ...payload, items: JSON.parse(payload.items) };
    } catch (error) {
      return payload;
    }
  }
  return payload;
};

const createItem = async (req, res) => {
  const created = await PurchaseOrder.create(normalizeItems(req.body));
  return res.status(201).json(created);
};

const updateItem = async (req, res) => {
  const updated = await PurchaseOrder.findByIdAndUpdate(
    req.params.id,
    normalizeItems(req.body),
    { new: true }
  );
  if (!updated) {
    return res.status(404).json({ message: 'PurchaseOrder not found' });
  }
  return res.json(updated);
};

const deleteItem = async (req, res) => {
  const deleted = await PurchaseOrder.findByIdAndDelete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'PurchaseOrder not found' });
  }
  return res.json({ message: 'PurchaseOrder removed' });
};

module.exports = {
  listItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
