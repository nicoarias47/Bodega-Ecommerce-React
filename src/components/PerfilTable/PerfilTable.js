import React from "react";
import { Col } from "react-bootstrap";

// Hacer un acordion hacia abajo en vez de tablas

const PerfilTable = () => {
  return (
    <Col className="perfil_orders">
      <h2>Compras realizadas:</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pedido</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Col>
  );
};

export default PerfilTable;
