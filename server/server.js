const express = require('express');
const connectDB = require('./Config/db');
require('dotenv').config(); // تحميل المتغيرات من ملف .env
const app = express();
const habitday = require('./Routes/HabitRoutes.js');

// Middleware
app.use(express.json()); // لتمكين معالجة JSON

// Connect to MongoDB
connectDB(); // الاتصال بقاعدة البيانات

// Routes
app.use('/api/habits', habitday); // استخدام المسارات الخاصة بالـ habits

// بدء الاستماع للطلبات على المنفذ المحدد
const PORT = process.env.PORT ;
// const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
