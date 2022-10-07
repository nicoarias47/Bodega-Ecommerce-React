import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./FilterPanel.css";

const FilterPanel = ({ menorPrecio, vinos }) => {
  return (
    <Col className="col-12 col-sm-6 col-md-4 filter">
      <h1>Filtrar por</h1>
      <h3>
        <Link to="/tienda">Vinos</Link>
      </h3>
      <h4>
        <Link to="/tienda/malbec">Malbec</Link>
      </h4>
      <h4>
        <Link to="/tienda/blend">Blend</Link>
      </h4>
      <h4>
        <Link to="/tienda/cabernet">Cabernet Sauvignon</Link>
      </h4>
      <h4>
        <Link to="/tienda/syrah">Syrah</Link>
      </h4>
      <h4>
        <Link to="/tienda/blanco">Blanco</Link>
      </h4>
      <h3>Precio</h3>
      <h4>Mayor precio</h4>
      <h4>Menor precio</h4>
    </Col>
  );
};

export default FilterPanel;
