// import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logoCraft1.png";
import Cartwidget from "../Cartwidget/Cartwidget";


/* A function that returns the NavBar component. */
const NavBar = () => {
  
  return (
    <>
      <Navbar bg="black" variant="dark" expand="lg">
        <Container className="nav">
          <Link to="/">
            <Navbar.Brand>
              <img
                alt="Logo"
                src={logo}
                width="170"
                height="120"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/category/Cerveza Rubia">
                Cerveza Rubia
              </Link>
              <Link className="nav-link" to="/category/Cerveza Roja">
                Cerveza Roja
              </Link>
              <Link className="nav-link" to="/category/Cerveza Negra">
                Cerveza Negra
              </Link>
            </Nav>
          </Navbar.Collapse>
          {/* A link to the cart page. */}
          <Link to="/cart">
            <Cartwidget />      
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;


