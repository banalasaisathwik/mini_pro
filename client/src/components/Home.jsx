import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const services = [
    { id: 1, name: "Plumbing", description: "Fix leaks and install fixtures.", image: "plumber.jpg" },
    { id: 2, name: "Electrician", description: "Address all your electrical needs.", image: "electrician.png" },
    { id: 3, name: "House Cleaning", description: "General cleaning services.", image: "cleaning.jpg" },
    { id: 4, name: "Carpenter", description: "Skilled carpentry services for furniture and woodwork.", image: "https://example.com/carpenter.jpg" },
    { id: 5, name: "Painter", description: "Professional painting services for homes and businesses.", image: "https://example.com/painter.jpg" },
    { id: 6, name: "Locksmith", description: "Emergency locksmith services for lock repair and installation.", image: "https://example.com/locksmith.jpg" },
    { id: 7, name: "Online Tutoring", description: "Personalized tutoring for various subjects.", image: "https://example.com/tutoring.jpg" },
    { id: 8, name: "Fitness Training", description: "Personalized fitness plans and coaching.", image: "https://example.com/fitness.jpg" },
    { id: 9, name: "Graphic Design", description: "Professional graphic design services.", image: "https://example.com/graphicdesign.jpg" },
    { id: 10, name: "Wedding Photography", description: "Capture beautiful moments on your special day.", image: "https://example.com/weddingphotography.jpg" },
    { id: 11, name: "Event Planning", description: "Organize and plan memorable events.", image: "https://example.com/eventplanning.jpg" },

];


const Image = styled('img')({
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '1rem'
});

const CustomButton = styled(Button)(({ theme }) => ({
    marginTop: 'auto',
    marginBottom: '1rem',
}));

const Home = () => {
    return (
        <div>
            <Container sx={{ marginTop: '2rem' }}>
                <Typography variant="h4" gutterBottom align="center">Our Services</Typography>
                <Grid container spacing={3} justifyContent="center">
                    {services.map(service => (
                        <Grid item xs={12} sm={6} md={4} key={service.id}>
                            <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Image src={service.image} alt={service.name} />
                                    <Typography variant="h6" gutterBottom>{service.name}</Typography>
                                    <Typography variant="body2" color="textSecondary" gutterBottom>{service.description}</Typography>
                                    <CustomButton component={Link} to={`/services/${service.name}`} variant="contained" color="primary">Book Now</CustomButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
