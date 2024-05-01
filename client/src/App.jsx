import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/NavBar'
import Home from './components/Home'
import Spa from './components/Spa';
import Booking from './components/Booking';
import Help from './components/Help';
import Feedback from './components/Feedback';
import Enquiry from './components/Enquiry';
import MyBookings from './components/MyBookings';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/spa"} element={<Spa/>} />
          <Route path={"/acService"} element={<Spa />} />
          <Route path={"/deepHouseClean"} element={<Spa />} />
          <Route path={"/lawnCare"} element={<Spa />} />
          <Route path={"/petGrooming"} element={<Spa />} />
          <Route path={"/locksmith"} element={<Spa />} />
          <Route path={"/painting"} element={<Spa />} />
          <Route path={"/mehandi"} element={<Spa />} />
          <Route path={"/booking/:type"} element={<Booking/>} />
          <Route path={"/mybookings"} element={<MyBookings/>} />
          <Route path={"/help"} element={<Help/>} />
          <Route path={"/help/feedback"} element={<Feedback/>} />
          <Route path={"/help/enquiry"} element={<Enquiry/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
