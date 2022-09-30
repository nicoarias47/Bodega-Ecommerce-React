import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const { addItem } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const styleImg = {
    backgroundImage: `url(${data.img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "50%",
    height: "100vh",
  };

  const onAdd = (quantity) => {
    addItem(data, quantity);
    setLoading(true);
  };

  return (
    <Container>
      <Row>
        <Col className="col-12 col-sm-6 img-vino" style={styleImg}></Col>
        <Col className="col-12 col-sm-6 col-detail d-flex flex-column justify-content-between">
          <div>
            <span className="marca">Soul</span>
            <h1>{data.name}</h1>
            <span className="description">{data.description}</span>
          </div>
          <div className="description-footer">
            <div className="detail d-flex flex-row justify-content-between">
              <span className="tipo">Variedad:</span>
              <span className="tipo-dato">{data.variety}</span>
            </div>
            <div className="detail d-flex flex-row justify-content-between">
              <span className="tipo">Viñedo:</span>
              <span className="tipo-dato">{data.vineyard}</span>
            </div>
            <div className="detail d-flex flex-row justify-content-between">
              <span className="tipo">Cosecha:</span>
              <span className="tipo-dato">{data.harvest}</span>
            </div>
            <div className="detail d-flex flex-row justify-content-between">
              <span className="tipo">Crianza:</span>
              <span className="tipo-dato">{data.breeding}</span>
            </div>
            <div className="description-count">
              <div className="pb-4">
                <ItemCount
                  stock={data.stock}
                  initial={1}
                  price={data.price}
                  id={data.id}
                  data={data}
                  onAdd={onAdd}
                />
              </div>
              {loading ? (
                <Col className="d-flex flex-row justify-content-evenly gap-3">
                  <Link
                    className="btn-count my-1 py-2"
                    to="/tienda"
                    style={{
                      textDecoration: "none",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Seguir comprando
                  </Link>
                  <Link
                    className="btn-count my-1 py-2"
                    to="/carrito"
                    style={{
                      textDecoration: "none",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Finalizar Compra
                  </Link>
                </Col>
              ) : (
                ""
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
