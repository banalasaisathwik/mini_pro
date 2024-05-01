// BookingForm.js
import React from 'react';

const BookingForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
              
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
}

export default BookingForm;
