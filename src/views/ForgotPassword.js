import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import MessageError from "../components/MessageError/MessageError";

const ForgotEmail = () => {
  const [user, setUser] = useState("");
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(user);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        return setError("Este usuario no se encuentra registrado");
      }
    }
  };

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <Container fluid="lg">
      <Row>
        <Col></Col>
        <Col className="col-12 col-sm-8 col-md-6 col-lg-4">
          {error && <MessageError message={error} />}
          <div className=" login d-flex flex-column justify-content-center ">
            <span className="login-forgot text-center mb-2">
              Igresa tu email para recuperar tu cuenta. Es posible que nuestro
              mail llegue a tu casilla de correo no deseado
            </span>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="d-block">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email@ejemplo.com"
                onChange={handleChange}
                className="w-100 mb-2"
              />
              <button className="mb-2 d-flex justify-content-between align-items-center">
                Enviar
              </button>
            </form>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ForgotEmail;
