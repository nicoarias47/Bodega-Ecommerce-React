import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import BtnAddCart from "../BtnAddCart/BtnAddCart";
import "./ItemCount.css";

const ItemCount = ({ stock, price, countU, name, variety, id }) => {
  const [count, setCount] = useState(countU);
  const [stockCard, setStockCard] = useState(stock);

  const sumar = () => {
    if (stockCard > 0) {
      setCount(count + 1);
      setStockCard(stockCard - 1);
    }
  };

  const restar = () => {
    if (stockCard < stock) {
      setCount(count - 1);
      setStockCard(stockCard + 1);
    }
  };

  return (
    <Row className="d-flex flex-column">
      <Col className="py-1">
        <span className="info-price p-3">$ {price}</span>
        <span className="info-price">Stock: {stockCard}</span>
      </Col>
      <Col className="py-1">
        <button className="btn-count" onClick={restar}>
          -
        </button>
        <span className="info-count">{count}</span>
        <button className="btn-count" onClick={sumar}>
          +
        </button>
      </Col>
      <BtnAddCart
        price={price}
        count={count}
        name={name}
        variety={variety}
        setCount={setCount}
        id={id}
      />
    </Row>
  );
};

export default ItemCount;
