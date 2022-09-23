import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
// Utilizamos doc y getDoc Para traer solo un item
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [vino, setVino] = useState([]);
  let { id } = useParams();

  const getData = async (id) => {
    const docRef = doc(db, "wines", id);
    const docSnap = await getDoc(docRef);
    setVino({ ...docSnap.data(), id: docSnap.id });
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <Container fluid="lg">
      <Row className="d-flex flex-wrap">
        <ItemDetail data={vino} key={vino.id} />
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
