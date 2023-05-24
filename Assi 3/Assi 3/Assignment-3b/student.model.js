const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentEmail: {
    type: String,
    required: true,
  },
  studentCity: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
