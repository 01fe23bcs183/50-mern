const Supplier = require('../models/Supplier');

const listItems = async (req, res) => {
  const items = await Supplier.find().sort({ createdAt: -1 });
  res.json(items);
};

const getItem = async (req, res) => {
  const item = await Supplier.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Supplier not found' });
  }
  return res.json(item);
};

const createItem = async (req, res) => {
  const created = await Supplier.create(req.body);
  return res.status(201).json(created);
};

const updateItem = async (req, res) => {
  const updated = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) {
    return res.status(404).json({ message: 'Supplier not found' });
  }
  return res.json(updated);
};

const deleteItem = async (req, res) => {
  const deleted = await Supplier.findByIdAndDelete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Supplier not found' });
  }
  return res.json({ message: 'Supplier removed' });
};

module.exports = {
  listItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
