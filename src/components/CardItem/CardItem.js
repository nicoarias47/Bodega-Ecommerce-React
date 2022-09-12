import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./CardItem.css";

function CardItem({ name, img, variety, id, stock, price }) {
  return (
    <>
      <Col className="d-flex align-items-stretch">
        <Card>
          <Link to={`/detalle/${id}`}>
            <Card.Img variant="top" src={img} />
          </Link>
          <Card.Body>
            <Card.Title className="card-title">{name}</Card.Title>
            <Card.Text className="card-variety">{variety}</Card.Text>
            <Link to={`/detalle/${id}`} style={{ textDecoration: "none" }}>
              <Card.Text className="see-detail">Ver mas</Card.Text>
            </Link>
            <ItemCount stock={stock} price={price} />
            <Button className="btn-buy">Comprar</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CardItem;
