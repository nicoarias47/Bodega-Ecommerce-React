import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
const ForgotEmail = () => {
  const [user, setUser] = useState("");
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email@ejemplo.com"
              onChange={handleChange}
            />
            <button>Enviar</button>
          </form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ForgotEmail;
