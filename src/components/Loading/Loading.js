import Spinner from "react-bootstrap/Spinner";
import { Row } from "react-bootstrap";

const Loading = () => {
  return (
    <Row className="d-flex justify-content-center py-3">
      <Spinner animation="border" role="status" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Row>
  );
};

export default Loading;
