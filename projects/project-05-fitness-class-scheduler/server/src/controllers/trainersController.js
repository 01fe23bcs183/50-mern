const Trainer = require('../models/Trainer');

const listItems = async (req, res) => {
  const items = await Trainer.find().sort({ createdAt: -1 });
  res.json(items);
};

const getItem = async (req, res) => {
  const item = await Trainer.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Trainer not found' });
  }
  return res.json(item);
};

const createItem = async (req, res) => {
  const created = await Trainer.create(req.body);
  return res.status(201).json(created);
};

const updateItem = async (req, res) => {
  const updated = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) {
    return res.status(404).json({ message: 'Trainer not found' });
  }
  return res.json(updated);
};

const deleteItem = async (req, res) => {
  const deleted = await Trainer.findByIdAndDelete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Trainer not found' });
  }
  return res.json({ message: 'Trainer removed' });
};

module.exports = {
  listItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
