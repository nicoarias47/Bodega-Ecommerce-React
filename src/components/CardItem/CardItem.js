import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardItem.css";

function CardItem({ data }) {
  return (
    <>
      <Col className="d-flex align-items-stretch">
        <Card>
          <Link to={`/detalle/${data.id}`}>
            <Card.Img variant="top" src={data.img} />
          </Link>
          <Card.Body>
            <Card.Title className="card-title">{data.name}</Card.Title>
            <Card.Text className="card-variety">{data.variety}</Card.Text>
            <Link to={`/detalle/${data.id}`} style={{ textDecoration: "none" }}>
              <Card.Text className="see-detail">Ver mas</Card.Text>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CardItem;
