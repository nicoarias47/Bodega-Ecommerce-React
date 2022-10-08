import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./FilterPanel.css";

const FilterPanel = () => {
  let activeStyle = {
    color: "#b2936d",
  };

  return (
    <Col className="col-12 col-sm-6 col-md-4 filter">
      <h1>Filtrar por</h1>
      <h3>
        <NavLink to="/tienda">Vinos</NavLink>
      </h3>
      <h4>
        <NavLink
          to="/tienda/malbec"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Malbec
        </NavLink>
      </h4>
      <h4>
        <NavLink
          to="/tienda/bonarda"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Bonarda
        </NavLink>
      </h4>
      <h4>
        <NavLink
          to="/tienda/cabernet"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Cabernet Sauvignon
        </NavLink>
      </h4>
      <h4>
        <NavLink
          to="/tienda/syrah"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Syrah
        </NavLink>
      </h4>
      <h4>
        <NavLink
          to="/tienda/blanco"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Blanco
        </NavLink>
      </h4>
      <h3>Precio</h3>
      <h4>Mayor precio</h4>
      <h4>Menor precio</h4>
    </Col>
  );
};

export default FilterPanel;
