import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/NavBar'
import Home from './components/Home'
import Spa from './components/Spa';
import House from './components/HouseCleaning';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/test"} element={<House/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
