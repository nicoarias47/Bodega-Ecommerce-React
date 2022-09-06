import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../../img/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex justify-content-evenly">
          <Col className="footer-logo">
            <img src={logo} alt="logo" className="logo" />
          </Col>
          <Col className="footer-description d-flex flex-column">
            <h2 className="title">Oficinas Buenos Aires</h2>
            <span className="description">Av. Colon 123 - piso 13</span>
            <span className="description">Buenos Aires, Argentina</span>
            <span className="description">Tel: +5411 1234-5678</span>
            <span className="description">info@wines.com</span>
          </Col>
          <Col className="footer-description d-flex flex-column">
            <h2 className="title">Bodega Name Wines</h2>
            <span className="description">RP47 NombreFalso</span>
            <span className="description">Valle de Uco, Mendoza</span>
            <span className="description">Tel: +54(0261) 1234-5678</span>
            <span className="description">info@wines.com</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
