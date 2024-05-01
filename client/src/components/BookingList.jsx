import React, { useState, useEffect } from 'react';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';

const RootContainer = styled('div')({
    maxWidth: 600,
    margin: 'auto',
    marginTop: (theme) => theme.spacing(5),
    padding: (theme) => theme.spacing(2),
});

const BookingItem = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

const Heading = styled('h1')(({ theme }) => ({
    marginBottom: theme.spacing(3),
}));

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    const dummyBookings = [
        { _id: 1, user: { username: 'mallesh' }, date: '2024-05-01T12:00:00Z', status: 'Confirmed', service: "plumber" },
        { _id: 2, user: { username: 'guruesh' }, date: '2024-05-03T14:30:00Z', status: 'Pending', service: "electrician" },
        { _id: 3, user: { username: 'dolly' }, date: '2024-05-05T10:00:00Z', status: 'Cancelled', service: "house clean" },
        { _id: 4, user: { username: 'billgates' }, date: '2024-05-07T16:45:00Z', status: 'Confirmed', service: "ac service " },
    ];

    useEffect(() => {
        setBookings(dummyBookings);
    }, []);

    return (
        <RootContainer>
            <Heading>Booking List</Heading>
            <ul>
                {bookings.map(booking => (
                    <BookingItem key={booking._id}>
                        <strong>Provider name:</strong> {booking.user.username}
                        <br />
                        <strong>Phone: 94756555665</strong>
                        <br />
                        <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}
                        <br />
                        <strong>Status:</strong> {booking.status}
                        <br />
                        <strong>Service:</strong> {booking.service}

                    </BookingItem>
                ))}
            </ul>
        </RootContainer>
    );
};

export default BookingList;
