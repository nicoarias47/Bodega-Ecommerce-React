import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CheckoutContainer from "../components/CheckoutContainer/CheckoutContainer";

const Checkout = () => {
  return (
    <Container fluid="lg">
      <Row>
        <Col></Col>
        <CheckoutContainer />
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Checkout;
