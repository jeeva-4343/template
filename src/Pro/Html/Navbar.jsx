import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import home from '../images/plogo.png';
import { Link } from 'react-router-dom'; // Import Link component from React Router

function Navibar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

  return (
    <>
      <Navbar expand="lg" expanded={expanded} className="bg-body-tertiary mb-3 navibar">
        <Container>
          {/* Use Link component instead of href */}
          <Navbar.Brand as={Link} to="/" className='navname'>
            <img src={home} alt="" className='img1'/>
            <b>Digital Peak</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleNavbar} />
          <Navbar.Collapse id="offcanvasNavbar">
            <Nav className="justify-content-end flex-grow-1 pe-3 navmenu" onSelect={closeNavbar}>
              {/* Use Link components for navigation */}
              <Nav.Link as={Link} to="/" className='navbt' onClick={closeNavbar}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className='navbt' onClick={closeNavbar}>About</Nav.Link>
              <Nav.Link as={Link} to="/service" className='navbt' onClick={closeNavbar}>Services</Nav.Link>
              <Nav.Link as={Link} to="/blog" className='navbt' onClick={closeNavbar}>Blog</Nav.Link>
              <Nav.Link as={Link} to="/careers" className='navbt' onClick={closeNavbar}>Careers</Nav.Link>
              <Nav.Link as={Link} to="/products" className='navbt' onClick={closeNavbar}>Products</Nav.Link>

              <Nav.Link as={Link} to="/contact" className='navbt contact' onClick={closeNavbar}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;
