const express = require("express");
const { Booking } = require("../db");
const router = express.Router();
const { authenticateJwt, SECRET } = require("../middleware/auth");

router.post("/book", async (req, res) => {
  try {
    const {
      userId,
      typeOfServiceNeeded,
      date,
      providerId,
      serviceArea,
      fullName,
      email,
      phoneNumber,
    } = req.body;
    const newBooking = new Booking({
      user: userId,
      provider: providerId,
      typeOfServiceNeeded: typeOfServiceNeeded,
      serviceArea: serviceArea,
      date,
      fullName,
      email,
      phoneNumber,
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
    console.log("Accept put request");
    console.log(bookingId);
    console.log(providerId);
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

router.put(
  "/update/:bookingId/:date/:time",
  authenticateJwt,
  async (req, res) => {
    const { bookingId, date, time } = req.params;
    console.log("Date and time put request", date, time);
    try {
      const booking = await Booking.findByIdAndUpdate(
        bookingId,
        {
          date: date,
          time: time,
          updated_at: new Date(),
        },
        { new: true }
      );
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      res.json({ message: "Booking date updated successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error updaing booking date", error: error.message });
    }
  }
);

router.put("/finish/:bookingId", authenticateJwt, async (req, res) => {
  const { bookingId } = req.params;
  try {
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "finished", updated_at: new Date() },
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json({ message: "Booking finished successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error finishing booking", error: error.message });
  }
});

router.delete("/delete/:bookingId", authenticateJwt, async (req, res) => {
  const { bookingId } = req.params;

  try {
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error deleting booking", error: error.message });
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
      serviceArea: booking.serviceArea,
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
