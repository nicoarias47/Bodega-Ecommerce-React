import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Container, Row, Col } from "react-bootstrap";
import CardItem from "../CardItem/CardItem";
import FilterPanel from "../FilterPanel/FilterPanel";
import Loading from "../Loading/Loading";

const ItemList = () => {
  const { vinos } = useContext(DataContext);
  return (
    <Container className="py-5" fluid="lg">
      <Row>
        <FilterPanel />
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
                price={el.price}
                stock={el.stock}
                countU={el.countU}
              />
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ItemList;
