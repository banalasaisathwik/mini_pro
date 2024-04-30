const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    phone: Number,
    username: { type: String, unique: true },
    password: String,
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
});

const ProviderSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    tokenAmount: Number,
    serviceName: String,
    area: [String],
    requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }],
});

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' }
});

const User = mongoose.model('User', UserSchema);
const Provider = mongoose.model('Provider', ProviderSchema);
const Booking = mongoose.model('Booking', BookingSchema);

module.exports = {
    User, Provider, Booking }