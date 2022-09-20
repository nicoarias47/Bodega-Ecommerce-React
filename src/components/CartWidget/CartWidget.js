import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";
const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  const [load, setLoad] = useState(false);

  let loading = totalItems();

  useEffect(() => {
    loading > 0 ? setLoad(true) : setLoad(false);
  }, [loading]);

  return (
    <div style={{ color: "#b2936d", fontSize: "2.4rem" }}>
      <FontAwesomeIcon icon={faBagShopping} />

      {load ? <span className="count-widget-cart">{loading}</span> : ""}
    </div>
  );
};

export default CartWidget;
