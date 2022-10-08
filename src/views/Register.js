import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import MessageError from "../components/MessageError/MessageError";
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
    <Container fluid="lg">
      <Row>
        <Col></Col>
        <Col className="col-12 col-sm-8 col-md-6 col-lg-4">
          {error && <MessageError message={error} />}
          <div className=" login d-flex flex-column justify-content-center ">
            <h3 className="login-title text-center">Register</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="email" className="d-block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email@ejemplo.com"
                  onChange={handleChange}
                  className="w-100"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="d-block">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  onChange={handleChange}
                  className="w-100"
                />
              </div>
              <button className="mb-2 d-flex justify-content-between align-items-center">
                Registrarse
              </button>
            </form>
            <span className="py-2 d-flex justify-content-between">
              ¿Ya posee una cuenta?{" "}
              <Link to="/login" className="text-end">
                Iniciar Sesión
              </Link>
            </span>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Register;
