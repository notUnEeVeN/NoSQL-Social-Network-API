const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed
mongoose.set('debug', true);

// Start the server after connecting to the database
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
