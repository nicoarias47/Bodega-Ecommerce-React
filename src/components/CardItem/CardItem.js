import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./CardItem.css";

function CardItem({ data }) {
  return (
    <>
      <Link to={`/detalle/${data.id}`} style={{ textDecoration: "none" }}>
        <Card className="d-flex align-items-stretch">
          <Link to={`/detalle/${data.id}`}>
            <Card.Img variant="top" src={data.img} />
          </Link>
          <Card.Body>
            <Card.Title className="card-title">{data.name}</Card.Title>
            <Card.Text className="card-variety">{data.variety}</Card.Text>
            <Card.Text className="card-price">${data.price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default CardItem;
