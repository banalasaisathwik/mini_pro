const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  profilePicture: String,
  homeAddress: { type: String, required: true },
  communityId: { type: String },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
});

const ProviderSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  profilePicture: String,
  businessName: String,
  typeOfServicesOffered: { type: String, required: true },
  serviceArea: [{ type: String, required: true }],
  yearsOfExperience: Number,
  rating: { type: Number, default: 0, min: 0, max: 5 },
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
});

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "Provider" },
  typeOfServiceNeeded: { type: String, required: true },
  date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);
const Provider = mongoose.model("Provider", ProviderSchema);
const Booking = mongoose.model("Booking", BookingSchema);

module.exports = {
  User,
  Provider,
  Booking,
};
