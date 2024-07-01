const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const port = 9023;
const url = process.env.MONGODB_URL;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const signUpSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const signUpDetails = mongoose.model('signupDetails', signUpSchema);

app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await signUpDetails.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Account already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new signUpDetails({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Signup Successful' });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await signUpDetails.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Server error' });
  }
});