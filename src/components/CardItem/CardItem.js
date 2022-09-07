import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import "./CardItem.css";
import { Link } from "react-router-dom";

function CardItem({ name, img, variety, breeding, id }) {
  return (
    <>
      <Col className="col-6 col-md-4 col-lg-3 my-2">
        <Card>
          <Link to={`/detalle/${id}`}>
            <Card.Img variant="top" src={img} />
          </Link>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{breeding}</Card.Text>
            <Card.Text>{variety}</Card.Text>
            <Link to={`/detalle/${id}`}>
              <Button variant="primary">Detalle</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CardItem;
