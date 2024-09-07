import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;

