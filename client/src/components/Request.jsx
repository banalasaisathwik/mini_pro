import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const ServiceRequestContainer = styled(Grid)({
    maxWidth: 600,
    margin: 'auto',
    marginTop: '2rem',
    padding: '1rem',
});

const ServiceRequest = () => {
    const [serviceType, setServiceType] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleServiceTypeChange = (event) => {
        setServiceType(event.target.value);
    };

    const handleAdditionalInfoChange = (event) => {
        setAdditionalInfo(event.target.value);
    };

    const handleSubmit = () => {
        window.alert('success');
        setServiceType('');
        setAdditionalInfo('');
    };

    return (
        <ServiceRequestContainer container spacing={2} justifyContent="center">
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom align="center">
                    Request Service
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Service Type"
                    value={serviceType}
                    onChange={handleServiceTypeChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    multiline
                    rows={5}
                    variant="outlined"
                    label="Additional Information"
                    value={additionalInfo}
                    onChange={handleAdditionalInfoChange}
                />
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit Request
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" component={Link} to="/" color="secondary">
                    Back to Home
                </Button>
            </Grid>
        </ServiceRequestContainer>
    );
};

export default ServiceRequest;
