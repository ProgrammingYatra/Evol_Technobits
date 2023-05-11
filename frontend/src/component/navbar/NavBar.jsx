import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/page1" className="nav-link">Page 1</Link>
          <Link to="/page2" className="nav-link">Page 2</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavBar
