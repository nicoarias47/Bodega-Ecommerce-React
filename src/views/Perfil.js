import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PerfilAccordion from "../components/PerfilAccordion/PerfilAccordion";
import Loading from "../components/Loading/Loading";
import { useAuth } from "../context/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const Perfil = () => {
  const [orderList, setOrderList] = useState([]);
  const { user, loading, logOut } = useAuth();
  const noImg = <i className="fa-regular fa-user"></i>;

  const handleLogout = () => {
    logOut();
  };

  const getData = async () => {
    const q = query(collection(db, "orders"), where("email", "==", user.email));
    await getDocs(q).then((resp) => {
      setOrderList(
        resp.docs.map((order) => ({ ...order.data(), key: order.id }))
      );
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <Loading />;

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
      <Row className="pb-5">
        {orderList.map((el) => {
          return (
            <PerfilAccordion
              key={el.key}
              date={el.date}
              id={el.key}
              data={el}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Perfil;
