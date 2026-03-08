require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(" Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Simple test route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(5000, () => console.log('Server running on port 5000'));