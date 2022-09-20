import React from "react";
import { Container, Row, Col, FormGroup } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container-footer">
        <Row className="d-flex justify-content-evenly">
          <Col className="footer-logo">
            <img src={logo} alt="logo" className="logo" />
          </Col>
          <Col className="d-flex flex-column">
            <h2 className="footer-title">Oficinas Buenos Aires</h2>
            <span className="footer-description">Av. Colon 123 - piso 13</span>
            <span className="footer-description">Buenos Aires, Argentina</span>
            <span className="footer-description">Tel: +5411 1234-5678</span>
            <span className="footer-description">info@wines.com</span>
          </Col>
          <Col className="d-flex flex-column">
            <h2 className="footer-title">Oficinas Mendoza</h2>
            <span className="footer-description">8 de septiembre</span>
            <span className="footer-description">Villa Bastías</span>
            <span className="footer-description">Tel: +54(0261) 1234-5678</span>
            <span className="footer-description">info@wines.com</span>
          </Col>
          <Col className="d-flex flex-column">
            <h2 className="footer-title">Bodega Soul Wines</h2>
            <span className="footer-description">RP47 NombreFalso</span>
            <span className="footer-description">Valle de Uco, Mendoza</span>
            <span className="footer-description">Tel: +54(0261) 1234-5678</span>
            <span className="footer-description">info@wines.com</span>
          </Col>
        </Row>
        <Row className="text-center pt-5">
          <Col>
            <span className="footer-derechos">
              ® Soul Wines 2022, todos los derechos reservados.
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
