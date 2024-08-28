const express = require('express');
const router = express.Router();
const { addHabit, getHabits, updateHabit, deleteHabit } = require('../Controllers/habitController');

// Add Habit
router.post('/add', addHabit);

// Get Habits
router.get('/get', getHabits);

// Update Habit
router.put('/update/:id', updateHabit);

// Delete Habit
router.delete('/delete/:id', deleteHabit);

module.exports = router;
