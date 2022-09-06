import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="navbar-brand">
          LOGO
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div></div>
          <Nav>
            <Link to="/" href="/" color="danger" className="nav-link">
              Inicio
            </Link>
            <Link to="/tienda" href="/" className="nav-link">
              Tienda
            </Link>
            <Link to="/contacto" href="/" className="nav-link">
              Contacto
            </Link>
          </Nav>
          <img src={CartImg} className="cart" alt="carrito de compras" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
