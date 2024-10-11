import React from 'react';
import Container from 'react-bootstrap/Container';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';import { Link } from 'react-router-dom';

// import { FiSearch } from "react-icons/fi";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
   
   return (
  
   <Navbar expand="lg" variant="dark" className="navbar-custom">
   <Container>
     <Navbar.Brand href="/">BlogApp</Navbar.Brand>
     <Navbar.Toggle aria-controls="navbar-nav" />
     <Navbar.Collapse id="navbar-nav">
       <Nav className="me-auto fs-5">
         <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
         <Nav.Link><Link to="/about" className="nav-link">About</Link></Nav.Link>
         <Nav.Link><Link to="/signup" className="nav-link">Signup</Link></Nav.Link>
         <Nav.Link><Link to="/login" className="nav-link">Login</Link></Nav.Link>
         <Nav.Link><Link to="/blogs" className="nav-link">Blog</Link></Nav.Link>
         <Nav.Link><Link to="/createblogs" className="nav-link">Create Blogs</Link></Nav.Link>
       </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>
    
  );
}

export default Header;
