import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShopTable from "../ShopTable/ShopTable";
import { DataContext } from "../../context/DataContext";
import "./ShopList.css";

const ShopList = () => {
  const { cartList } = useContext(DataContext);

  return (
    <Container fluid="lg">
      <Row className="d-flex flex-column my-5">
        <Col>
          <h1 className="shop-title">Vinos Seleccionados:</h1>
        </Col>
        <Col>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Variedad</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartList.length === 0 ? (
                <tr>
                  <h3 className="shop-clear">Carrito vacio</h3>
                </tr>
              ) : (
                cartList.map((el, i) => (
                  <ShopTable
                    key={i}
                    name={el.name}
                    variety={el.variety}
                    price={el.price}
                    count={el.count}
                    id={el.id}
                  />
                ))
              )}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopList;
