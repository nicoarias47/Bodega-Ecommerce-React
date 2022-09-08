import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
const CartWidget = () => {
  return (
    <div style={{ color: "#b2936d", fontSize: "2.4rem" }}>
      <FontAwesomeIcon icon={faBagShopping} />
    </div>
  );
};

export default CartWidget;
