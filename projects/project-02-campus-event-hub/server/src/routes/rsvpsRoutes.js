const express = require('express');
const { authenticate } = require('../middleware/auth');
const {
  listItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/rsvpsController');

const router = express.Router();

router.get('/', authenticate, listItems);
router.get('/:id', authenticate, getItem);
router.post('/', authenticate, createItem);
router.put('/:id', authenticate, updateItem);
router.delete('/:id', authenticate, deleteItem);

module.exports = router;
