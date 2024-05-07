const express = require("express");
const { Booking } = require("../db");
const router = express.Router();
const { authenticateJwt, SECRET } = require("../middleware/auth");

router.post("/book", authenticateJwt, async (req, res) => {
  try {
    const { userId, typeOfServiceNeeded, date, providerId } = req.body;
    const newBooking = new Booking({
      user: userId,
      provider: providerId,
      typeOfServiceNeeded: typeOfServiceNeeded,
      date,
    });
    await newBooking.save();
    res.status(201).json({
      message: "Booking created successfully",
      bookingId: newBooking._id,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating booking", error: error.message });
  }
});

router.put(
  "/accept/:bookingId/:providerId",
  authenticateJwt,
  async (req, res) => {
    const { bookingId, providerId } = req.params;
    try {
      const booking = await Booking.findByIdAndUpdate(
        bookingId,
        {
          status: "accepted",
          updated_at: new Date(),
          acceptedProvider: providerId,
        },
        { new: true }
      );
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      res.json({ message: "Booking accepted successfully", booking });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error accepting booking", error: error.message });
    }
  }
);

router.put("/reject/:bookingId", authenticateJwt, async (req, res) => {
  const { bookingId } = req.params;
  try {
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "rejected", updated_at: new Date() },
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json({ message: "Booking rejected successfully", booking });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error rejecting booking", error: error.message });
  }
});

router.get("/mybooking", authenticateJwt, async (req, res) => {
  try {
    const { userId } = req.user;
    const userBookings = await Booking.find({ user: userId });
    const bookingsWithDetails = userBookings.map((booking) => ({
      serviceType: booking.typeOfServiceNeeded,
      status: booking.status,
      id: booking._id,
      acceptedProvider: booking.acceptedProvider,
      date: booking.date,
      time: booking.time,
    }));
    res.json({ bookings: bookingsWithDetails });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching user bookings", error: error.message });
  }
});

module.exports = router;
