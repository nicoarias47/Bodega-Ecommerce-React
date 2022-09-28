import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const { singUp } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await singUp(user.email, user.password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <Row className="my-5">
        <Col></Col>
        <Col>
          {error}
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email@ejemplo.com"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                onChange={handleChange}
              />
            </div>
            <button>Registrarse</button>
          </form>
          <span className="text-center py-2">
            ¿Ya posee una cuenta? <Link to="/login">Iniciar Sesión</Link>
          </span>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Register;
