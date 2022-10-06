import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./PerfilAccordion.css";

const PerfilAccordion = ({ id, date, data }) => {
  console.log(data);
  return (
    <Accordion>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>
          <div>{id}</div>
          <div className="d-flex ms-5">Total: ${data.totalPrice}</div>
          <div className="d-flex ms-5">Fecha: {date}</div>
        </Accordion.Header>
        <Accordion.Body>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Variedad</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.totalPrice}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default PerfilAccordion;
