import React from "react";

const PerfilTable = ({ order: { name, category, quantity, price } }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>{price * quantity}</td>
      </tr>
    </>
  );
};

export default PerfilTable;
