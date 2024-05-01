import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const FeedbackContainer = styled(Grid)({
    maxWidth: 600,
    margin: 'auto',
    marginTop: '2rem',
    padding: '1rem',
});

const Feedback = () => {
    const [feedbackText, setFeedbackText] = useState('');

    const handleChange = (event) => {
        setFeedbackText(event.target.value);
    };

    const handleSubmit = () => {

        window.alert('feedback successfully submitted')

        setFeedbackText('');
    };

    return (
        <FeedbackContainer container spacing={2} justifyContent="center">
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom align="center">
                    Give Feedback
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={5}
                    variant="outlined"
                    label="Your Feedback"
                    value={feedbackText}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit Feedback
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" component={Link} to="/" color="secondary">
                    Back to Home
                </Button>
            </Grid>
        </FeedbackContainer>
    );
};

export default Feedback;
