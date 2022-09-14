import React, { useState, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ShopTable = ({ name, variety, count, price, id }) => {
  const [totalItem, setTotalItem] = useState(count * price);
  const { cartList, setCartList } = useContext(DataContext);

  const deleteItem = () => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar: '${name}' x ${count}?`
    );

    if (isDelete) {
      let newList = cartList.filter((el) => el.id !== id);
      setCartList(newList);
    } else {
      return;
    }
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{variety}</td>
      <td>$ {price}</td>
      <td>{count}</td>
      <td>$ {totalItem}</td>
      <td>
        <button onClick={deleteItem} style={{ border: "none" }}>
          <FontAwesomeIcon icon={faTrash} style={{ color: "#b2936d" }} />
        </button>
      </td>
    </tr>
  );
};

export default ShopTable;
