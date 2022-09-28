import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const Perfil = () => {
  const { user, loading, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <Container>
      <Row>
        <Col>
          <Col>
            <h1>Bienvenido {user.email}</h1>
            {user.photoURL && <img src={user.photoURL} alt="foto de perfil" />}
          </Col>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;
