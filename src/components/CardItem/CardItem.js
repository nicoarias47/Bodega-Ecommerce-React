import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import "./CardItem.css";

function CardItem({ name, img, variety, breeding }) {
  return (
    <>
      <Col className="col-6 col-md-4 col-lg-3 my-2">
        <Card style={{}}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{breeding}</Card.Text>
            <Card.Text>{variety}</Card.Text>
            <Button variant="primary">Detalle</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CardItem;
