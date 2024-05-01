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
    rating: { type: Number, default: 0, min: 0, max: 5 },
    area: [{ type: String, required: true }],
    requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }],
});

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});


const User = mongoose.model('User', UserSchema);
const Provider = mongoose.model('Provider', ProviderSchema);
const Booking = mongoose.model('Booking', BookingSchema);

module.exports = {
    User, Provider, Booking 
}