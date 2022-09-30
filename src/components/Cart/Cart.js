import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartDetail from "../CartDetail/CartDetail";
import CartTable from "../CartTable/CartTable";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [conditional, setConditional] = useState(false);

  let load = cart.length;

  useEffect(() => {
    load <= 0 ? setConditional(true) : setConditional(false);
  }, [load]);

  return (
    <Container fluid="lg">
      <Row className="d-flex flex-column my-5">
        <Col>
          <h1 className="shop-title">Vinos Seleccionados:</h1>
        </Col>
        <Col>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Variedad</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0
                ? undefined
                : cart.map((el) => <CartTable key={el.id} data={el} />)}
            </tbody>
          </table>
        </Col>
        {conditional ? (
          <Col className="d-flex flex-column">
            <span className="shop-clear">Carrito vacio</span>
            <Link to="/tienda" className="shop-clear-btn">
              ver tienda
            </Link>
          </Col>
        ) : (
          <CartDetail />
        )}
      </Row>
    </Container>
  );
};

export default Cart;
