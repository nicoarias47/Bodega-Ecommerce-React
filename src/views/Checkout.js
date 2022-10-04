import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";

const Checkout = () => {
  return (
    <Container fluid="lg">
      <Row>
        <Col></Col>
        <CheckoutForm />
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Checkout;
