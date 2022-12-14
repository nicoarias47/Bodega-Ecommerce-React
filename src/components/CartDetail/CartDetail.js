import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./CartDetail.css";

const CartDetail = () => {
  const { totalPrice, totalItems, ClearCart } = useContext(CartContext);
  const [minimum, setMinimum] = useState(false);
  const { user } = useAuth();

  let total = totalItems();
  let navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      const MySwal = withReactContent(Swal);
      return MySwal.fire({
        title: "Debes estar logeado para continuar",
        text: "¿Ir al login?",
        icon: "warning",
        color: "#b2936d",
        background: "#f4f4f4",
        showCancelButton: true,
        confirmButtonColor: "#b2936d",
        cancelButtonColor: "#7d7f81",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }

    return navigate("/checkout");
  };

  useEffect(() => {
    total >= 6 ? setMinimum(true) : setMinimum(false);
  }, [total]);

  return (
    <Col className="checkout">
      <h2 className="shop-title">Detalle de su compra</h2>
      <span className="checkout-title">Subtotal ${totalPrice()}</span>
      <span className="checkout-title">Envío $2300</span>
      <span className="checkout-title">Total ${totalPrice() + 2300}</span>
      {minimum ? (
        <div>
          <button className="checkout-btn" onClick={handleClick}>
            Finalizar Compra
          </button>
          <button className="checkout-btn" onClick={ClearCart}>
            Limpiar carrito
          </button>
        </div>
      ) : (
        <Col className="d-flex flex-column">
          <span className="checkout-minimun">
            La compra minima es de 6 Vinos
          </span>
          <Link to="/tienda" className="checkout-minimun-btn">
            ver tienda
          </Link>
        </Col>
      )}
    </Col>
  );
};

export default CartDetail;
