import { useState } from 'react';
import './App.css';
import Services from './components/services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Services />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
