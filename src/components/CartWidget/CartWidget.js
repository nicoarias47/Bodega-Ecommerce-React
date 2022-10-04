import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  const [load, setLoad] = useState(false);

  let itemsAmount = totalItems();

  useEffect(() => {
    itemsAmount > 0 ? setLoad(true) : setLoad(false);
  }, [itemsAmount]);

  return (
    <div style={{ color: "#b2936d", fontSize: "2.4rem" }}>
      <img src="assets/bag-cart.png" alt="cart" className="bag-cart" />

      {load ? <span className="count-widget-cart">{itemsAmount}</span> : ""}
    </div>
  );
};

export default CartWidget;
