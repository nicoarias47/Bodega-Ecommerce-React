import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Col } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { SweetAlertOnlyMsg } from "../SweetAlert/SweetAlert";
import { Navigate } from "react-router";
import "./CheckoutContainer.css";

const initialState = {
  name: "",
  lastName: "",
  province: "",
  direction: "",
  number: "",
  tel: "",
  email: "",
};

const CheckoutContainer = () => {
  const [order, setOrder] = useState(initialState);
  const { user } = useAuth();
  const { totalPrice, cart, ClearCart } = useContext(CartContext);

  const handleChange = ({ target: { name, value } }) => {
    const date = new Date();
    setOrder({
      ...order,
      [name]: value,
      email: user.email,
      totalPrice: totalPrice() + 2300,
      date: date.toLocaleDateString(),
      items: cart.map((el) => ({
        id: el.id,
        name: el.name,
        price: el.price,
        quantity: el.quantity,
        category: el.category,
      })),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCancel = () => {
    ClearCart();
  };

  const handleBuy = async () => {
    const q = await collection(db, "orders");
    const add = await addDoc(q, order).then(({ id }) => id);

    SweetAlertOnlyMsg({
      title: "Gracias por su compra",
      text: `Sera redirigido a su perfil, donde podra ver sus compras`,
      footer: `id: ${add}`,
    });

    setTimeout(() => {
      console.log("hola");
      <Navigate to="/perfil" />;
    }, 3000);
  };

  return (
    <Col className="formulario">
      <CheckoutForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleBuy={handleBuy}
      />
    </Col>
  );
};

export default CheckoutContainer;
