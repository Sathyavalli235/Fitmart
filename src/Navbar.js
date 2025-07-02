// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FitNavbar = () => {
  return (
    <Navbar expand="lg" bg="success" variant="light" sticky="top">
       

      <Container>
        <Navbar.Brand as={Link} to="/">🏋️‍♂️ FitMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="fit-navbar" />
        <Navbar.Collapse id="fit-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/"> 🏠Home</Nav.Link>
            <Nav.Link as={Link} to="/addproduct"> ➕Add New Products</Nav.Link>
            <Nav.Link as={Link} to="/productslist">📦 Products</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default FitNavbar;
