import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const HelpContainer = styled(Grid)({
    maxWidth: 600,
    margin: 'auto',
    marginTop: '2rem',
    padding: '1rem',
});

const Help = () => {
    return (
        <HelpContainer container spacing={2} justifyContent="center">
            <Grid item>
                <Button variant="contained" color="primary" component={Link} to="/request">
                    Request More Service
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="secondary" component={Link} to="/feedback">
                    Provide Feedback
                </Button>
            </Grid>
        </HelpContainer>
    );
};

export default Help;
