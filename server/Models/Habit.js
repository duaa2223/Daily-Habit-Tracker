const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
  },
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Habit', HabitSchema);
