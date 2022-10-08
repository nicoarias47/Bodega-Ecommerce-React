import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { useAuth } from "../../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  const { user } = useAuth();

  let activeStyle = {
    color: "#b2936d",
  };

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
            <NavLink
              to="/"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/tienda"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Tienda
            </NavLink>
            <span className="nav-link" style={{ cursor: "pointer" }}>
              Contacto
            </span>
          </Nav>
          <div className="d-flex align-items-baseline  cart-login">
            <Link
              to="/carrito"
              style={{ textDecoration: "none", paddingRight: "1rem" }}
            >
              <CartWidget />
            </Link>
            <div>
              {!user ? (
                <NavLink
                  to="/login"
                  className="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Login
                </NavLink>
              ) : (
                <NavLink
                  to="/perfil"
                  className="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Perfil
                </NavLink>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
