import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  return (
    <Container>
      <Row>
        <Col className="col-6 img-vino">
          <img src="https://placeimg.com/800/800/nature" alt={data.name} />
        </Col>
        <Col className="col-6 col-detail">
          <span className="marca">Patito</span>
          <h1>{data.name}</h1>
          <span className="description">{data.description}</span>
          <div className="description-footer">
            <span className="variedad">Variedad: {data.variety}</span>
            <span className="viniedo">Viñedo: {data.vineyard}</span>
            <span className="cosecha">Cosecha: {data.harvest}</span>
            <span className="crianza">Crianza: {data.breeding}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
