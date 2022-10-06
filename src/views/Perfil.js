import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PerfilAccordion from "../components/PerfilAccordion/PerfilAccordion";
import Loading from "../components/Loading/Loading";
import { useAuth } from "../context/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const Perfil = () => {
  const [orderList, setOrderList] = useState([]);
  const [loader, setLoader] = useState(false);
  const { user, logOut } = useAuth();
  const noImg = <i className="fa-regular fa-user"></i>;

  const handleLogout = () => {
    logOut();
  };

  const getData = async () => {
    setLoader(true);
    const q = query(collection(db, "orders"), where("email", "==", user.email));
    await getDocs(q).then((resp) => {
      setOrderList(
        resp.docs.map((order) => ({ ...order.data(), key: order.id }))
      );
      setLoader(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="perfil">
        <Container>
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
        </Container>
      </div>
      <Container className="perfil-orders">
        <Row className="py-5">
          <h2 className="perfil-subtitle pb-5">Ordenes de compra:</h2>
          {loader ? (
            <Loading />
          ) : (
            orderList.map((el) => {
              return (
                <PerfilAccordion
                  key={el.key}
                  date={el.date}
                  id={el.key}
                  data={el}
                />
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
};

export default Perfil;
