import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [vinos, setVinos] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
      let resp = await fetch(url);
      let data = await resp.json();

      setVinos(data);
    };
    getData("http://localhost:5000/vinos/1");
  }, []);

  return (
    <Container>
      <Row className="d-flex flex-wrap">
        <ItemDetail data={vinos} />
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
