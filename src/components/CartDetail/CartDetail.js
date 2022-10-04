import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartDetail.css";

const CartDetail = () => {
  const { totalPrice, totalItems, ClearCart } = useContext(CartContext);
  const [minimum, setMinimum] = useState(false);
  let total = totalItems();

  useEffect(() => {
    total >= 6 ? setMinimum(true) : setMinimum(false);
  }, [total]);

  return (
    <Col className="checkout">
      <h2 className="shop-title">Detalle de su compra</h2>
      <span className="checkout-title">Subtotal ${totalPrice()}</span>
      <span className="checkout-title">Envío $2300</span>
      <span className="checkout-title">Total ${totalPrice() + 2300}</span>
      {minimum ? (
        <div>
          <Link
            to="/checkout"
            className="checkout-btn"
            style={{ textDecoration: "none" }}
          >
            Finalizar Compra
          </Link>
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

export default CartDetail;
