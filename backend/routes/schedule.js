const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory storage (replace with database)
let schedules = [];

// Get today's schedule
router.get('/today', (req, res) => {
  try {
    const todaySchedules = schedules.filter(s => {
      const scheduleDate = new Date(s.time).toDateString();
      const today = new Date().toDateString();
      return scheduleDate === today;
    }).sort((a, b) => new Date(a.time) - new Date(b.time));
    
    res.json({ success: true, data: todaySchedules });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create schedule
router.post('/create', (req, res) => {
  try {
    const { title, description, time, type, recurring } = req.body;
    
    if (!title || !time) {
      return res.status(400).json({ success: false, error: 'Title and time are required' });
    }
    
    const schedule = {
      id: uuidv4(),
      title,
      description,
      time: new Date(time),
      type: type || 'reminder', // reminder, appointment, task
      recurring: recurring || false,
      completed: false,
      createdAt: new Date()
    };
    
    schedules.push(schedule);
    res.json({ success: true, data: schedule });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Mark schedule as completed
router.put('/:id/complete', (req, res) => {
  try {
    const schedule = schedules.find(s => s.id === req.params.id);
    if (!schedule) {
      return res.status(404).json({ success: false, error: 'Schedule not found' });
    }
    
    schedule.completed = true;
    res.json({ success: true, data: schedule });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get morning routine
router.get('/routine/morning', (req, res) => {
  try {
    const morningRoutine = [
      { time: '07:30', task: 'Breakfast & 4 music songs', icon: '🍽️' },
      { time: '07:45', task: 'Get ready (meds, teeth, hair, toilet, shoes)', icon: '🛁' },
      { time: '07:55', task: 'Lock apps (except transit & weather), pack bag, deodorant', icon: '🔒' },
      { time: '08:00', task: 'Leave for school', icon: '🚪' },
      { time: '08:30', task: 'Arrive at school, freeze screen time', icon: '📚' }
    ];
    
    res.json({ success: true, data: morningRoutine });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
