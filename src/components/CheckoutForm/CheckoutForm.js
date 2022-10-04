import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Col } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "./CheckoutForm.css";

const initialState = {
  name: "",
  lastName: "",
  province: "",
  direction: "",
  number: "",
  tel: "",
  email: "",
};

const CheckoutForm = () => {
  const [order, setOrder] = useState(initialState);
  const { user } = useAuth();
  const { totalPrice, cart } = useContext(CartContext);

  const handleChange = ({ target: { name, value } }) => {
    setOrder({
      ...order,
      [name]: value,
      email: user.email,
      totalPrice: totalPrice() + 2300,
      cart: cart.map((el) => ({
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

  const handleCancel = () => {};

  const handleBuy = () => {
    const q = collection(db, "orders");
    addDoc(q, order).then(({ id }) => console.log(id));
  };

  return (
    <Col className="formulario">
      <h1 className="text-center">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="d-block">
            Nombre
          </label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Nicolas"
            onChange={handleChange}
            required
            className="w-100"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="lastName" className="d-block">
            Apellido
          </label>
          <input
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Arias"
            onChange={handleChange}
            required
            className="w-100"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="tel" className="d-block">
            Tel
          </label>
          <input
            name="tel"
            id="tel"
            type="number"
            placeholder="01154268112"
            onChange={handleChange}
            required
            className="w-100"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="province" className="d-block">
            Provincia
          </label>
          <select
            id="province"
            name="province"
            onChange={handleChange}
            required
          >
            <option disabled>...</option>
            <option>Buenos Aires</option>
            <option>Ciudad Autónoma de Buenos Aires</option>
            <option>Catamarca</option>
            <option>Chaco</option>
            <option>Chubut</option>
            <option>Córdoba</option>
            <option>Corrientes</option>
            <option>Entre Ríos</option>
            <option>Formosa</option>
            <option>Jujuy</option>
            <option>La Pampa</option>
            <option>La Rioja</option>
            <option>Mendoza</option>
            <option>Misiones</option>
            <option>Neuquen</option>
            <option>Rio Negro</option>
            <option>Salta</option>
            <option>San Juan</option>
            <option>San Luis</option>
            <option>Santa Crunz</option>
            <option>Santa Fe</option>
            <option>Santiago del Estero</option>
            <option>Tierra del Fuego</option>
            <option>Tucuman</option>
          </select>
        </div>
        <div className="d-flex justify-content-between gap-3 mb-2">
          <div>
            <label htmlFor="direction" className="d-block">
              Dirección
            </label>
            <input
              type="text"
              name="direction"
              id="direction"
              placeholder="Av. siempre viva"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="number" className="d-block">
              N°
            </label>
            <input
              type="number"
              name="number"
              placeholder="346"
              className="w-100"
              min={0}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button onClick={handleBuy}>Enviar</button>
      </form>
      <button onClick={handleCancel}>Cancelar</button>
    </Col>
  );
};

export default CheckoutForm;
