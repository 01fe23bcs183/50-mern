const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { connectDatabase } = require('./config/db');
const healthRoutes = require('./routes/healthRoutes');
const authRoutes = require('./routes/authRoutes');
const jobsRoutes = require('./routes/jobsRoutes');
const applicantsRoutes = require('./routes/applicantsRoutes');
const applicationsRoutes = require('./routes/applicationsRoutes');

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/applicants', applicantsRoutes);
app.use('/api/applications', applicationsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

const port = process.env.PORT || 5000;

const startServer = async () => {
  await connectDatabase(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });
};

startServer();
