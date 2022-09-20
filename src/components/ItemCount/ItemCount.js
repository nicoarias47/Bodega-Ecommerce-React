import React, { useState, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, price, data }) => {
  const [count, setCount] = useState(initial);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(data, quantity);
  };

  const sumar = () => setCount(count + 1);
  const restar = () => setCount(count - 1);

  return (
    <Row className="d-flex flex-column text-center">
      <Col className="py-1">
        <span className="info-price p-3">$ {price}</span>
        <span className="info-price">Stock: {stock} </span>
      </Col>
      <Col className="py-1">
        <button className="btn-count" disabled={count <= 1} onClick={restar}>
          -
        </button>
        <span className="info-count ">{count}</span>
        <button className="btn-count" disabled={count >= stock} onClick={sumar}>
          +
        </button>
      </Col>
      <Col>
        <button
          className="btn-buy"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar
        </button>
      </Col>
    </Row>
  );
};

export default ItemCount;
