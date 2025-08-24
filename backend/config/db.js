// backend/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/user_blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Kết nối MongoDB thành công');
  } catch (err) {
    console.error('Kết nối MongoDB thất bại:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
