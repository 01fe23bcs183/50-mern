const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(409).json({ message: 'Email already in use' });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, passwordHash });
  return res.status(201).json({ id: user._id, name: user.name, email: user.email });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing credentials' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ sub: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '8h',
  });

  return res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
};

const me = async (req, res) => {
  const user = await User.findById(req.user.sub).select('-passwordHash');
  return res.json(user);
};

module.exports = { register, login, me };
