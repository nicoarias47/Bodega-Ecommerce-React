import React from "react";
import { Col } from "react-bootstrap";
import "./FilterPanel.css";

const FilterPanel = () => {
  return (
    <Col className="col-12 col-sm-6 col-md-4 filter">
      <h1>Filtrar por</h1>
      <h3>Vinos</h3>
      <h4 className="filter-red">Tintos</h4>
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
  );
};

export default FilterPanel;
