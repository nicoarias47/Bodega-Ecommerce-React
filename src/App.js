import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ShopList from "./components/ShopList/ShopList";

//VIEWS
import Home from "./views/Home";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Perfil from "./views/Perfil";
import Login from "./views/Login";
import Register from "./views/Register";
import ForgotPassword from "./views/ForgotPassword";
import Error404 from "./views/Error404";

// CSS
import "./App.css";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Shop />} />
            <Route path="/tienda/:categoryId" element={<Shop />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<ShopList />} />
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <Perfil />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
