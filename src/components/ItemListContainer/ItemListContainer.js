import React, { useEffect, useState } from "react";
import FilterPanel from "../FilterPanel/FitelPanel";
import ItemList from "../ItemList/ItemList";
import { Row, Col, Container } from "react-bootstrap";
import Loading from "../Loading/Loading";
import { db } from "../../firebase/firebaseConfig";

// Firebase
import { collection, query, getDocs, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [vinos, setVinos] = useState([]);
  const [variedad, setVariedad] = useState(null);

  const getData = async () => {
    const q = query(collection(db, "wines"));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setVinos(docs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="py-5" fluid="lg">
      <Row>
        <FilterPanel />
        <Col className="col-12 col-sm-6 col-md-8 d-flex flex-wrap gap-2 panel-vinos">
          {vinos.length === 0 ? <Loading /> : <ItemList vinos={vinos} />}
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
