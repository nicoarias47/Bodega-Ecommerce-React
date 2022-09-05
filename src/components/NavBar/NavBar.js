import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartImg from "./cart.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="md" className="nav-bar">
      <Container fluid="lg" className="containerasd">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div></div>
          <Nav>
            <Nav.Link href="/" color="danger">
              Inicio
            </Nav.Link>
            <Nav.Link href="/">Tienda</Nav.Link>
            <Nav.Link href="/">Contacto</Nav.Link>
          </Nav>
          <img src={CartImg} className="cart" alt="carrito de compras" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
