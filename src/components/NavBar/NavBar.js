import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { useAuth } from "../../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <Navbar expand="md" className="nav-bar">
      <Container fluid="lg">
        <Link to="/" className="navbar-brand">
          <img src="assets/logo.png" alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div></div>
          <Nav>
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/tienda" className="nav-link">
              Tienda
            </Link>
            <Link to="/contacto" className="nav-link">
              Contacto
            </Link>
          </Nav>
          <div className="d-flex align-items-baseline">
            <Link to="/carrito" style={{ textDecoration: "none" }}>
              <CartWidget />
            </Link>
            <div className="px-2">
              {!user ? (
                <Link
                  to="/login"
                  style={{ textDecoration: "none" }}
                  className="nav-link"
                >
                  Login
                </Link>
              ) : (
                <Link
                  to="/login"
                  style={{ textDecoration: "none" }}
                  className="nav-link"
                >
                  Perfil
                </Link>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
