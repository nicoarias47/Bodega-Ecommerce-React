import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardItem from "../CardItem/CardItem";
import Loading from "../Loading/Loading";
import "./ItemList.css";

const ItemList = () => {
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
        <Col className="col-12 col-sm-6 col-md-4 filter">
          <h1>Filtrar por</h1>
          <h3>Vinos</h3>
          <h4>Tintos</h4>
          <span>Malbec</span>
          <span>Blend</span>
          <span>Cabernet Sauvignon</span>
          <span>Syrah</span>
          <h4 className="filter-white">Blancos</h4>
          <h3>Crianza</h3>
          <span>12 meses</span>
          <span>18 meses</span>
          <span>24 meses</span>
          <h3>Precio</h3>
          <span>Mayor precio</span>
          <span>Menor precio</span>
        </Col>
        <Col className="col-12 col-sm-6 col-md-8 d-flex flex-wrap gap-2">
          {vinos.length === 0 ? (
            <Loading />
          ) : (
            vinos.map((el) => (
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
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ItemList;
