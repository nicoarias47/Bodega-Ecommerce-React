import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/perfil");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await loginWithGoogle();
      navigate("/perfil");
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
            <div>
              <button>Iniciar Sesión</button>
              <Link to="/forgotpassword">¿Olvidaste tu contraseña?</Link>
            </div>
          </form>
          <button onClick={handleGoogleLogin}>Iniciar Sesión con Google</button>
          <span className="text-center py-2">
            ¿No posees una cuenta? <Link to="/register">Registrarse</Link>
          </span>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
