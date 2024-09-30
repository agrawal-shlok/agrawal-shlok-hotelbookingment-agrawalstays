const express = require('express');
const router = express.Router(); // Correct usage of express.Router
const room = require('../Models/Rooms'); // Assuming 'Rooms' is your model name

// Route to get all rooms
router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await room.find({}); // Use the correct model reference
    res.send(rooms); // Return the rooms directl
  } catch (error) {
    return res.status(400).json({ message: error.message }); // Send the error message
  }
});

// Correct export
module.exports = router;
