// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Kết nối database
connectDB();

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/blog', require('./routes/blog.routes'));

app.get('/', (req, res) => res.send('API is running!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
