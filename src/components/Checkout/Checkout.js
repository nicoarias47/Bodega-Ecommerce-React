import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { totalPrice, totalItems, ClearCart } = useContext(CartContext);
  const [minimum, setMinimum] = useState(false);

  useEffect(() => {
    totalItems() >= 6 ? setMinimum(true) : setMinimum(false);
  }, [totalItems()]);

  return (
    <Col className="checkout">
      <span className="checkout-title">Sub-total ${totalPrice()}</span>
      <span className="checkout-title">envío $2300</span>
      <span className="checkout-title">Sub-total ${totalPrice() + 2300}</span>
      {minimum ? (
        <div>
          <button className="checkout-btn">Finalizar Compra</button>
          <button className="checkout-btn" onClick={ClearCart}>
            Limpiar carrito
          </button>
        </div>
      ) : (
        <span className="checkout-minimun">La compra minima es de 6 Vinos</span>
      )}
    </Col>
  );
};

export default Checkout;
