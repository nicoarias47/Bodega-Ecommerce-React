import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/tienda");
    } catch (error) {
      setError(error.message);
    }
  };

  // hay que usar un protector de rutas
  return (
    <Container>
      <Row className="my-5">
        <Col></Col>
        <Col>
          <form onSubmit={handleSubmit}>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="floatingInputCustom" style={{ color: "black" }}>
                Email Adress
              </label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <label
                htmlFor="floatingPasswordCustom"
                style={{ color: "black" }}
              >
                Password
              </label>
            </Form.Floating>
            <Col className="d-flex justify-content-between">
              <button>Iniciar sesión</button>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Olvidaste tu contraseña?
              </a>
            </Col>
          </form>
          <Col className="d-flex flex-column pt-2">
            <button className="py-1">Iniciar sesión con Google</button>
            <span className="text-center py-2">
              ¿No tienes cuenta? <Link to="/register">Registrate</Link>
            </span>
          </Col>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
