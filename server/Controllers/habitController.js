const Habit = require('../Models/Habit');

// Add Habit
exports.addHabit = async (req, res) => {
  try {
    const newHabit = new Habit(req.body);
    const habit = await newHabit.save();
    res.json(habit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Habits
exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Habit
exports.updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(habit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Habit (Soft Delete)
exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(req.params.id, { isCompleted: true }, { new: true });
    res.json({ message: 'Habit marked as completed', habit });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
