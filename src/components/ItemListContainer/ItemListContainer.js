import React, { useEffect, useState } from "react";
import FilterPanel from "../FilterPanel/FitelPanel";
import ItemList from "../ItemList/ItemList";
import { Row, Col, Container } from "react-bootstrap";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";

// Firebase
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [vinos, setVinos] = useState([]);
  const { categoryId } = useParams();

  // const getData = async () => {
  //   const q = query(collection(db, "wines"));
  //   const qFilter = query(q, where("category", "==", categoryId));

  //   if (categoryId) {
  //     return getDocs(qFilter).then((resp) =>
  //       setVinos(resp.docs.map((vino) => ({ id: vino.id, ...vino.data() })))
  //     );
  //   } else {
  //     getDocs(q).then((resp) =>
  //       setVinos(resp.docs.map((vino) => ({ id: vino.id, ...vino.data() })))
  //     );
  //   }
  // };

  useEffect(() => {
    const q = query(collection(db, "wines"));

    if (categoryId) {
      const qFilter = query(q, where("category", "==", categoryId));
      getDocs(qFilter).then((resp) =>
        setVinos(resp.docs.map((vino) => ({ id: vino.id, ...vino.data() })))
      );
    } else {
      getDocs(q).then((resp) =>
        setVinos(resp.docs.map((vino) => ({ id: vino.id, ...vino.data() })))
      );
    }
  }, [categoryId]);

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
