const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./student.route');

const app = express();

// Set up middleware and headers
app.use(express.json({ limit: '30mb', extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/student', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to MongoDB');
    app.listen(9994, function check(err) {
      if (err) console.log('Error .....!!!!!');
      else console.log('Started .....!!!!!');
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

// Set up routes
app.use('/student', studentRoutes);
app.get('/', function (req, res) {
  res.status(200).json({ message: '123' });
});
