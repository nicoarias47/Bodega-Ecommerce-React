import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Col } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { SweetAlertOnlyMsg } from "../SweetAlert/SweetAlert";
import { useNavigate } from "react-router";
import { CheckoutValidation } from "../CheckoutValidation/CheckoutValidation";
import "./CheckoutContainer.css";
import Loading from "../Loading/Loading";

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
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { totalPrice, cart, ClearCart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

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

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(CheckoutValidation(order));
  };

  const handleCancel = () => {
    ClearCart();
    setOrder(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(CheckoutValidation(order));
    if (Object.keys(errors).length === 0 && Object.keys(cart).length > 0) {
      setLoading(true);
      finalFunction();
    }
  };

  const finalFunction = async () => {
    const q = collection(db, "orders");
    const add = await addDoc(q, order).then(({ id }) => id);

    SweetAlertOnlyMsg({
      title: "Gracias por su compra",
      text: `Sera redirigido a su perfil, donde podra ver sus compras`,
      footer: `id: ${add}`,
    });

    setLoading(false);
    setOrder(initialState);
    setTimeout(() => {
      navigate("/perfil");
      setCart([]);
    }, 4000);
  };

  return (
    <Col>
      {loading && <Loading />}
      {Object.keys(cart).length <= 0 ? (
        <span className="form-errorCart d-flex">
          No posees items en el carro de compras
        </span>
      ) : (
        ""
      )}
      <div className="formulario">
        <CheckoutForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          handleBlur={handleBlur}
          errors={errors}
          order={order}
        />
      </div>
    </Col>
  );
};

export default CheckoutContainer;
