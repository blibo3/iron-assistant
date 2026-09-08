const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory storage
let stepData = [];
let healthMetrics = [];

// Log steps
router.post('/steps/log', (req, res) => {
  try {
    const { steps, timestamp } = req.body;
    
    if (!steps) {
      return res.status(400).json({ success: false, error: 'Steps are required' });
    }
    
    const entry = {
      id: uuidv4(),
      steps,
      timestamp: timestamp || new Date(),
      date: new Date(timestamp || new Date()).toDateString()
    };
    
    stepData.push(entry);
    res.json({ success: true, data: entry });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get daily step count
router.get('/steps/daily', (req, res) => {
  try {
    const { date } = req.query;
    const targetDate = date || new Date().toDateString();
    
    const todaySteps = stepData
      .filter(s => s.date === targetDate)
      .reduce((total, s) => total + s.steps, 0);
    
    res.json({ 
      success: true, 
      data: { 
        date: targetDate, 
        steps: todaySteps,
        goal: 10000
      } 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Log health metric
router.post('/health/log', (req, res) => {
  try {
    const { type, value, unit } = req.body; // type: heart-rate, calories, water, sleep
    
    if (!type || !value) {
      return res.status(400).json({ success: false, error: 'Type and value are required' });
    }
    
    const metric = {
      id: uuidv4(),
      type,
      value,
      unit: unit || 'bpm',
      timestamp: new Date()
    };
    
    healthMetrics.push(metric);
    res.json({ success: true, data: metric });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get health summary
router.get('/health/summary', (req, res) => {
  try {
    const summary = {
      steps: stepData.reduce((total, s) => total + s.steps, 0),
      metrics: healthMetrics.length,
      lastUpdate: new Date()
    };
    
    res.json({ success: true, data: summary });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
