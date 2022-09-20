import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  const styleImg = {
    backgroundImage: `url(../${data.img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "50%",
    height: "100vh",
  };

  return (
    <Container>
      <Row>
        <Col className="col-12 col-sm-6 img-vino" style={styleImg}>
          {/* <img src={`../${data.img}`} alt={data.name} /> */}
        </Col>
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
              <ItemCount
                stock={data.stock}
                initial={1}
                price={data.price}
                id={data.id}
                data={data}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
