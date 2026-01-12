const Account = require('../models/Account');

const listItems = async (req, res) => {
  const items = await Account.find().sort({ createdAt: -1 });
  res.json(items);
};

const getItem = async (req, res) => {
  const item = await Account.findById(req.params.id);
  if (!item) {
    return res.status(404).json({ message: 'Account not found' });
  }
  return res.json(item);
};

const createItem = async (req, res) => {
  const created = await Account.create(req.body);
  return res.status(201).json(created);
};

const updateItem = async (req, res) => {
  const updated = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) {
    return res.status(404).json({ message: 'Account not found' });
  }
  return res.json(updated);
};

const deleteItem = async (req, res) => {
  const deleted = await Account.findByIdAndDelete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Account not found' });
  }
  return res.json({ message: 'Account removed' });
};

module.exports = {
  listItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
