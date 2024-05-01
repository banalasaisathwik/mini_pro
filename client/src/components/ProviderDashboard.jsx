import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography, Button } from '@mui/material';
import PaymentForm from './PaymentForm'; // Import the PaymentForm component

const ProviderDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [openPayment, setOpenPayment] = useState(false);

    const dummyBookings = [
        { _id: 1, user: 'Ali', service: 'Electrician', paid: false },
        { _id: 2, user: 'Sharat', service: 'Electrician', paid: false },
        { _id: 3, user: 'Yadaiha', service: 'Electrician', paid: false },
        { _id: 4, user: 'Malli', service: 'Electrician', paid: false },
    ];

    useEffect(() => {
        setBookings(dummyBookings);
    }, []);

    const handleBook = (bookingId) => {
        setOpenPayment(true);
    };

    const handlePaymentClose = () => {
        setOpenPayment(false);
    };

    const handlePaymentSuccess = () => {
        // Update booking status to paid
        setBookings(prevBookings =>
            prevBookings.map(booking =>
                booking._id === 1 ? { ...booking, paid: true } : booking
            )
        );
        setOpenPayment(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>Provider Dashboard</Typography>
            <List>
                {bookings.map(booking => (
                    <ListItem key={booking._id}>
                        <ListItemText primary={booking.user} secondary={`Service: ${booking.service}`} />
                        {!booking.paid && (
                            <Button variant="contained" color="primary" onClick={() => handleBook(booking._id)}>Book</Button>
                        )}
                    </ListItem>
                ))}
            </List>
            <PaymentForm
                open={openPayment}
                handleClose={handlePaymentClose}
                handlePaymentSuccess={handlePaymentSuccess}
            />
        </div>
    );
}

export default ProviderDashboard;
