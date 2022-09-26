import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container-footer">
        <Row className="d-flex justify-content-evenly">
          <Col className="footer-logo">
            <img src="assets/logo.png" alt="logo" className="logo" />
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
        <Row className="text-center pt-5 d-flex flex-column">
          <Col className="footer-social">
            <a
              href="https://github.com/nicoarias47"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dev-nicolasarias/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/nicoarias47"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </Col>
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
