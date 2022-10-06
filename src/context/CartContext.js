import React, { useState } from "react";
import { SweetAlertWithCancel } from "../components/SweetAlert/SweetAlert";

export const CartContext = React.createContext([]);

//export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agregar al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((el) => {
          return el.id === item.id
            ? { ...el, quantity: el.quantity + quantity }
            : el;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  // limpiar cart
  const ClearCart = () => {
    SweetAlertWithCancel({
      title: "Vaciando carrito",
      text: "¿Estas seguro?",
      confirm() {
        setCart([]);
      },
    });
  };
  // saber si el producto esta en el carrito
  const isInCart = (id) => (cart.find((el) => el.id === id) ? true : false);
  // eliminar producto
  const removeItem = (id, name) => {
    let isDelete = window.confirm(`¿Estas seguro de eliminar: '${name}' ?`);
    if (isDelete) {
      let arr = cart.filter((el) => el.id !== id);
      setCart(arr);
    }
  };

  const totalPrice = () => {
    return cart.reduce((acc, act) => acc + act.quantity * act.price, 0);
  };

  const totalItems = () => {
    return cart.reduce((acc, act) => acc + act.quantity, 0);
  };

  // ordenar por precio

  const menorPrecio = (array) => {
    return array.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      //a===b
      return 0;
    });
  };

  return (
    <CartContext.Provider
      value={{
        ClearCart,
        isInCart,
        removeItem,
        addItem,
        totalPrice,
        totalItems,
        cart,
        menorPrecio,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
