const express = require('express');
const { Booking } = require("../db");
const router = express.Router();
const { authenticateJwt, SECRET } = require("../middleware/auth");


router.post('/book', authenticateJwt, async (req, res) => {
    try {
        const { userId, providerId, date } = req.body;
        const newBooking = new Booking({
            user: userId,
            provider: providerId,
            date
        });
        await newBooking.save();
        res.status(201).json({ message: "Booking created successfully", booking: newBooking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating booking", error: error.message });
    }
});

router.put('/:bookingId', authenticateJwt, async (req, res) => {
    const { bookingId } = req.params;
    const { status } = req.body; 
    try {
        const booking = await Booking.findByIdAndUpdate(bookingId, { status, updated_at: new Date() }, { new: true });
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.json({ message: "Booking updated successfully", booking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating booking", error: error.message });
    }
});



module.exports = router;
