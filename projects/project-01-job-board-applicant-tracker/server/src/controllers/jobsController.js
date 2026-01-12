const Job = require('../models/Job');

const listItems = async (req, res) => {
  const items = await Job.find().sort({ createdAt: -1 });
  res.json(items);
};

const getItem = async (req, res) => {
  const item = await Job.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Job not found' });
  }
  return res.json(item);
};

const createItem = async (req, res) => {
  const created = await Job.create(req.body);
  return res.status(201).json(created);
};

const updateItem = async (req, res) => {
  const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) {
    return res.status(404).json({ message: 'Job not found' });
  }
  return res.json(updated);
};

const deleteItem = async (req, res) => {
  const deleted = await Job.findByIdAndDelete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Job not found' });
  }
  return res.json({ message: 'Job removed' });
};

module.exports = {
  listItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
