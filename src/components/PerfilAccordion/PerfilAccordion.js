import Accordion from "react-bootstrap/Accordion";
import PerfilTable from "../PerfilTable/PerfilTable";
import "./PerfilAccordion.css";

const PerfilAccordion = ({ id, date, data }) => {
  return (
    <Accordion>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>
          <div>ID: {id}</div>
          <div className="d-flex ms-5">Total: ${data.totalPrice}</div>
          <div className="d-flex ms-5">Fecha: {date}</div>
        </Accordion.Header>
        <Accordion.Body>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Variedad</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((el) => (
                <PerfilTable order={el} key={el.id} />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td>TOTAL</td>
                <td>{data.totalPrice}</td>
              </tr>
            </tfoot>
          </table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default PerfilAccordion;
