import React, { useEffect, useState } from "react";
import FilterPanel from "../FilterPanel/FitelPanel";
import ItemList from "../ItemList/ItemList";
import { Row, Col, Container } from "react-bootstrap";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
  const [vinos, setVinos] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
      let resp = await fetch(url);
      let data = await resp.json();

      setVinos(data);
    };
    getData("http://localhost:5000/vinos");
  }, []);

  return (
    <Container className="py-5" fluid="lg">
      <Row>
        <FilterPanel />
        <Col className="col-12 col-sm-6 col-md-8 d-flex flex-wrap gap-2">
          {vinos.length === 0 ? <Loading /> : <ItemList vinos={vinos} />}
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
