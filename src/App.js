import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ShopList from "./components/ShopList/ShopList";

//VIEWS
import Home from "./views/Home";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./views/Error404";

// CSS
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<ShopList />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
