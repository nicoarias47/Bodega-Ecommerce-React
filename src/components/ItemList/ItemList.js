import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CardItem from "../CardItem/CardItem";

const ItemList = () => {
  const [vinos, setVinos] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
      let resp = await fetch(url);
      let data = await resp.json();
      data.forEach(async (el) => {
        let vino = {
          id: el.id,
          name: el.name,
          img: el.img,
          description: el.description,
          variety: el.variety,
          vineyard: el.vineyard,
          breeding: el.breeding,
        };

        setVinos((vinos) => [...vinos, vino]);
      });
    };
    getData("http://localhost:5000/vinos");
  }, []);

  return (
    <Container>
      <Row className="d-flex flex-wrap">
        {vinos.map((el) => (
          <CardItem
            key={el.id}
            name={el.name}
            img={el.img}
            description={el.description}
            variety={el.variety}
            vineyard={el.vineyard}
            breeding={el.breeding}
            id={el.id}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
