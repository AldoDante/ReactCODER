import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../images/peces.png'
import Cartwidget from '../Cartwidget/Cartwidget';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src= {logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            Cerveza Artesanal
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Estilos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Golden</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ipa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Scotish</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Stout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Cartwidget/>
      </Container>
    </Navbar>
     
    </div>
  )
}

export default NavBar





{/* <Navbar.Brand href="#home">
            <img
              alt=""
              src= {logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand> */}