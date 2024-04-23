import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navibar from './Pro/Html/Navbar.jsx';
import Abtpage from './Pro/Aboutpage/Aboutpage.jsx';
import Homepage from './Pro/Html/Home.jsx';
import Services from './Pro/Servicepage/Servicepage.jsx';
import Blog from './Pro/Blogpage/Blog.jsx';
import Career from './Pro/Careerpage/Career.jsx';
import Contact from './Pro/Contactpage/Contact.jsx';

function App() {
  return (
    <Router>
        <Navibar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Abtpage/>} />
          <Route path="/service" element={<Services />}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Career/>} />
          <Route path="/contact" element={<Contact/>} />thhthhh
        </Routes>
    </Router>
  );
}
export default App;
