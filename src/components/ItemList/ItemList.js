import React from "react";
import CardItem from "../CardItem/CardItem";

const ItemList = ({ vinos }) => {
  return (
    <>
      {vinos.map((el) => (
        <CardItem data={el} key={el.id} />
      ))}
    </>
  );
};

export default ItemList;
