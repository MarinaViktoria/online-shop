import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import LoaderPage from './LoaderPage';

function App() {
  const [stateLoader, setStateLoader] = useState(true);
  useEffect (() => {
    const timer = setTimeout(() => setStateLoader(false), 3000);
    return () => clearTimeout(timer)  
  }, [])

  return (
  <Router>
    <nav>
    <Link to="/" className="link">shop</Link>
    <Link to="/about" className="link">About</Link>
    <Link to="/contact" className="link">Contact</Link>
    </nav>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </Router>
  )
}
export default App
