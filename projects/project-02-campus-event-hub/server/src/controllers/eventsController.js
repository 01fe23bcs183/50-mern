const Event = require('../models/Event');

const listItems = async (req, res) => {
  const items = await Event.find().sort({ createdAt: -1 });
  res.json(items);
};

const getItem = async (req, res) => {
  const item = await Event.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Event not found' });
  }
  return res.json(item);
};

const createItem = async (req, res) => {
  const created = await Event.create(req.body);
  return res.status(201).json(created);
};

const updateItem = async (req, res) => {
  const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) {
    return res.status(404).json({ message: 'Event not found' });
  }
  return res.json(updated);
};

const deleteItem = async (req, res) => {
  const deleted = await Event.findByIdAndDelete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Event not found' });
  }
  return res.json({ message: 'Event removed' });
};

module.exports = {
  listItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
