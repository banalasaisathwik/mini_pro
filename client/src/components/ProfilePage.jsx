import React from 'react';
import { Avatar, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
    maxWidth: 400,
    margin: 'auto',
    marginTop: (theme) => theme.spacing(5),
    padding: (theme) => theme.spacing(2),
});

const StyledAvatar = styled(Avatar)({
    width: 100,
    height: 100,
    margin: 'auto',
});

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

const Profile = () => {
    return (

        <StyledCard >
            <CardContent>
                <Grid container justifyContent="center">
                    <StyledAvatar alt="User" src="path_to_user_image.jpg" />
                </Grid>
                <Typography variant="h5" align="center" gutterBottom>
                    sai
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    sai@gmail.com
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    hyd
                </Typography>
                <StyledButton variant="contained" color="primary" fullWidth>
                    Edit Profile
                </StyledButton>
            </CardContent>
        </StyledCard>
    );
};

export default Profile;
