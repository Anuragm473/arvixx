import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs/ContactUs';
import Blogspage from './components/Blogspage';
import Blog2 from './components/Blog2/Blog2';

function App() {
  return (
    <>
    <div className='mainapplayout'>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<Blogspage/>} />
      </Routes>
      <Routes>
        <Route path="/blogs" element={<Blog2/>} />
      </Routes>
    </Router>
    <Footer/>
    </div>
    </>
  );
}

export default App;

