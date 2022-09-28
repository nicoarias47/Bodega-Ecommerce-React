import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MessageError from "../components/MessageError/MessageError";
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
      <Row>
        <Col></Col>
        <Col className="col-12 col-sm-8 col-md-6 col-lg-4">
          {error && <MessageError message={error} />}
          <div className=" login d-flex flex-column justify-content-center ">
            <span className="login-title text-center">Login</span>
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
              <div className="mb-4">
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
              <div className="mb-2 d-flex justify-content-between align-items-center">
                <button>Iniciar Sesión</button>
                <Link to="/forgotpassword">¿Olvidaste tu contraseña?</Link>
              </div>
            </form>
            <button
              onClick={handleGoogleLogin}
              className="d-flex justify-content-around align-items-center"
            >
              <i class="fa-brands fa-google"></i>
              <div>Iniciar Sesión con Google</div>
              <div></div>
            </button>
            <span className="text-center py-2 d-flex justify-content-between">
              ¿No posees una cuenta? <Link to="/register">Registrarse</Link>
            </span>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
