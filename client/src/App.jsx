import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@mui/material'; // Import Material-UI components
import Home from './components/Home';
import Profile from './components/ProfilePage';
import ProviderDashboard from './components/ProviderDashboard';
import BookingList from './components/BookingList';
import Help from './components/Help';
import RequestService from './components/Request';
import Feedback from './components/Feedback';

function App() {
  return (
    <Router>
      <div>
        <AppBar position="fixed" sx={{ backgroundColor: '#212121', color: 'white' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Local Company - Service Aggregator
            </Typography>
            <Avatar alt="User" src="path_to_user_image.jpg" />
            <Button component={Link} to="/profile" color="inherit">My Profile</Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/providers" element={<ProviderDashboard/>} />
          <Route path="/bookinglist/userId" element={<BookingList/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/request" element={<RequestService/>} />
          <Route path="/feedback" element={<Feedback/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
