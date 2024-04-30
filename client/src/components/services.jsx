import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const servicesData = [
    { id: 1, title: 'Electrician' },
    { id: 2, title: 'Plumber' },
    { id: 3, title: 'Carpenter' },
];

const Services = () => {
    return (
        <Grid container spacing={3}>
            {servicesData.map(service => (
                <Grid item key={service.id} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" align="center">
                                {service.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Services;
