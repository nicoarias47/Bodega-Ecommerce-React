import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { DataContext } from "../../context/DataContext";
import Button from "react-bootstrap/Button";

const BtnAddCart = ({ name, count, variety, price, setCount, id }) => {
  const { cartList, setCartList } = useContext(DataContext);

  const addCart = () => {
    if (count > 0) {
      const cart = {
        id: id,
        name: name,
        variety: variety,
        price: price,
        count: count,
      };

      if (cartList.some((el) => el.name === name)) {
        cartList.map((el) => {
          el.count += count;
        });
      } else {
        setCartList((cartList) => [...cartList, cart]);
      }
      setCount(0);
    }
    console.log(cartList);
  };

  return (
    <Col>
      <Button className="btn-buy" onClick={addCart}>
        Agregar al carrito
      </Button>
    </Col>
  );
};

export default BtnAddCart;
