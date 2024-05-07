const express = require("express");
const { Provider, Booking } = require("../db");
const { authenticateJwt, SECRET } = require("../middleware/auth");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");

router.post("/register", async (req, res) => {
  try {
    const found = await Provider.findOne({ email: req.body.email });
    if (found) {
      return res
        .status(403)
        .json({ status: "Error", error: "Duplicate Email" });
    } else {
      const ProviderData = {};
      for (const key in req.body) {
        if (req.body.hasOwnProperty(key) && req.body[key]) {
          ProviderData[key] = req.body[key];
        }
      }
      ProviderData.password = await bcrypt.hash(req.body.password, 10);
      const provider = await Provider.create(ProviderData);
      const token = jwt.sign({ providerId: provider.id }, SECRET, {
        expiresIn: "1h",
      });
      return res.json({
        status: "Success",
        message: "Provider created successfully",
        token,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ status: "Error", error: "Internal Server Error" });
  }
});

router.get(
  "/providersfilter/:serviceType/:serviceArea",
  authenticateJwt,
  async (req, res) => {
    const { serviceType, serviceArea } = req.params;
    try {
      const providers = await Provider.find({
        typeOfServiceOffered: "Spa",
      });
      console.log(serviceArea, serviceType);
      const token = req.headers.authorization;
      console.log(token);
      if (providers.length > 0) {
        const providerIds = providers.map((provider) => provider._id);
        const bookingData = {
          userId: req.user,
          typeOfServiceNeeded: serviceType,
          date: new Date(),
        };
        const headers = {
          "Content-Type": "application/json",
          authorization: token,
        };
        const bookingResponse = await axios.post(
          "http://localhost:1337/api/book/book",
          bookingData,
          {
            headers: headers,
          }
        );
        const createdBookingId = await bookingResponse.data.bookingId;
        const createdBooking = await Booking.findById(createdBookingId);
        createdBooking.providers = providerIds;
        await createdBooking.save();
        console.log(providerIds);
        const providerInfo = providers.map((provider) => {
          return {
            id: provider.id,
            fullName: provider.fullName,
            yearsOfExperience: provider.yearsOfExperience,
            rating: provider.rating,
          };
        });
        res.json({
          message: "Providers found",
          providers: providerInfo,
          bookingId: createdBookingId,
        });
      } else {
        console.log("No Providers found");
        res
          .status(404)
          .json({ message: "No providers found for the specified criteria" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error fetching providers", error: error.message });
    }
  }
);

router.get("/requests/:providerId", authenticateJwt, async (req, res) => {
  try {
    const { providerId } = req.params;
    const bookings = await Booking.find({ provider: providerId }).populate({
      path: "user",
      select: "fullName phoneNumber",
    });
    if (!bookings) {
      return res.status(404).json({ message: "Provider not found" });
    }
    res.json({ message: "Provider found", provider });
    const requests = bookings.map((booking) => ({
      typeOfService: booking.typeOfServiceNeeded,
      customerPhoneNumber: booking.user.phoneNumber,
      customerName: booking.user.fullName,
    }));
    res.json({ requests });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error finding provider;s requests",
      error: error.message,
    });
  }
});

module.exports = router;
