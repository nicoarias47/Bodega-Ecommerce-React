import React from "react";

const PerfilTable = ({ order: { name, category, quantity, price }, data }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{category}</td>
        <td>
          {data.direction} {data.number}
        </td>
        <td>{quantity}</td>
        <td>{price * quantity}</td>
      </tr>
    </>
  );
};

export default PerfilTable;
