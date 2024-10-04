const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://db:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err.message));

// Define a User schema
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  employeeId: String,
  serviceLine: String,
  techStack: String
});

// Create a User model
const User = mongoose.model('User', userSchema);

// Route to handle user registration
app.post('/register', async (req, res) => {
  try {
    const { fullName, email, employeeId, serviceLine, techStack } = req.body;
    const newUser = new User({
      fullName,
      email,
      employeeId,
      serviceLine,
      techStack
    });
    await newUser.save();  // Save to MongoDB
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error saving user data: ' + error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
