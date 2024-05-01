import React from 'react';
import { useState } from 'react';
import { Modal, Typography, Button } from '@mui/material';

const PaymentForm = ({ open, handleClose, handlePaymentSuccess }) => {
    const [paymentComplete, setPaymentComplete] = useState(false);

    const handlePayment = () => {
        //ikkada razor pay di add chestha shankar nuv 
        setTimeout(() => {
            setPaymentComplete(true);
            handlePaymentSuccess(); 
        }, 2000); 
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                <Typography variant="h5" gutterBottom>Enter Payment Details</Typography>
                {paymentComplete ? (
                    <Typography variant="body1" color="textSecondary">Payment successful!</Typography>
                ) : (
                    <div>
                        <Typography variant="body1" gutterBottom>Amount: 150 rs (devlop/dummy)</Typography>
                        <Button variant="contained" color="primary" onClick={handlePayment}>Pay Now</Button>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default PaymentForm;
