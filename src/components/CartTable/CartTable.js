import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartTable = ({ data }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.variety}</td>
      <td>$ {data.price}</td>
      <td>{data.quantity}</td>
      <td>$ {data.quantity * data.price}</td>
      <td>
        <button
          style={{ border: "none" }}
          onClick={() => removeItem(data.id, data.name)}
        >
          <FontAwesomeIcon icon={faTrash} style={{ color: "#b2936d" }} />
        </button>
      </td>
    </tr>
  );
};

export default CartTable;
