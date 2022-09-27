import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { totalPrice, totalItems, ClearCart } = useContext(CartContext);
  const [minimum, setMinimum] = useState(false);
  let total = totalItems();

  useEffect(() => {
    total >= 6 ? setMinimum(true) : setMinimum(false);
  }, [total]);

  return (
    <Col className="checkout">
      <span className="checkout-title">Subtotal ${totalPrice()}</span>
      <span className="checkout-title">Envío $2300</span>
      <span className="checkout-title">Total ${totalPrice() + 2300}</span>
      {minimum ? (
        <div>
          <button className="checkout-btn">Finalizar Compra</button>
          <button className="checkout-btn" onClick={ClearCart}>
            Limpiar carrito
          </button>
        </div>
      ) : (
        <Col className="d-flex flex-column">
          <span className="checkout-minimun">
            La compra minima es de 6 Vinos
          </span>
          <Link to="/tienda" className="checkout-minimun-btn">
            ver tienda
          </Link>
        </Col>
      )}
    </Col>
  );
};

export default Checkout;
