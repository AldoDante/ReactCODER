// import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import logo from "../../images/peces.png";
import Cartwidget from "../Cartwidget/Cartwidget";


const NavBar = () => {
  const {totalCantidad} = useCartContext()
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="60"
                height="60"
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
              <Nav.Link>Nosotros</Nav.Link>
              <NavDropdown title="Estilos" id="basic-nav-dropdown">
                <Link to="/categoria/Cerveza Rubia">
                <NavDropdown.Item href="#action/3.1">Cerveza Rubia</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to='/categoria/Cerveza Roja'>
                <NavDropdown.Item href="#action/3.2">Cerveza Roja</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to='/categoria/Cerveza Negra'>
                <NavDropdown.Item href="#action/3.3">Cerveza Negra</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Link to="/cart">
            {totalCantidad()!== 0 && totalCantidad()}
            {totalCantidad()!== 0 && <Cartwidget />}
            
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;


