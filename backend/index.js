const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const scheduleRoutes = require('./routes/schedule');
const communicationRoutes = require('./routes/communication');
const trackingRoutes = require('./routes/tracking');
const voiceRoutes = require('./routes/voice');
const arRoutes = require('./routes/ar');

// Use routes
app.use('/api/schedule', scheduleRoutes);
app.use('/api/communication', communicationRoutes);
app.use('/api/tracking', trackingRoutes);
app.use('/api/voice', voiceRoutes);
app.use('/api/ar', arRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Iron Assistant is online! 🦾' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🦾 Iron Assistant Backend running on port ${PORT}`);
});

module.exports = app;
