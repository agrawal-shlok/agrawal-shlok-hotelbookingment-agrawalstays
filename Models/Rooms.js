const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  maxcount: {
    type: Number,
    required: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  rentperday: {
    type: Number,
    required: true
  },
  imageurls: {
    type: [String], // Define it as an array of strings
    required: true
  },
  currentbookings: {
    type: Array, // Array type for bookings
    default: []
  },
  type: {
    type: String,
    required: true
  },
  description: { // Fixed typo and set type to String
    type: String,
    required: true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

// Export the model
const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel; // Corrected to module.exports
