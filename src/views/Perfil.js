import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PerfilTable from "../components/PerfilTable/PerfilTable";
import { useAuth } from "../context/AuthContext";

const Perfil = () => {
  const { user, loading, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  };

  const noImg = <i className="fa-regular fa-user"></i>;

  if (loading) return <h1>Loading</h1>;

  console.log(user);

  return (
    <Container fluid="lg">
      <Row>
        <Col className="perfil_details p-2 d-flex flex-row justify-content-evenly align-items-center">
          {user.photoURL ? (
            <img src={user.photoURL} alt="foto de perfil" />
          ) : (
            noImg
          )}
          <h1>Bienvenido {user.displayName || user.email}</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </Col>
      </Row>
      <Row>
        <PerfilTable />
      </Row>
    </Container>
  );
};

export default Perfil;
