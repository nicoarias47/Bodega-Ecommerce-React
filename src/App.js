import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";

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
import {
  ProtectedRoute,
  ProtectedRouteLoged,
} from "./components/ProtectedRoute/ProtectedRoute";

// CSS
import "./App.css";
import Checkout from "./views/Checkout";

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
            <Route path="/carrito" element={<Cart />} />
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <Perfil />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRouteLoged>
                  <Login />
                </ProtectedRouteLoged>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRouteLoged>
                  <Register />
                </ProtectedRouteLoged>
              }
            />
            <Route
              path="/forgotpassword"
              element={
                <ProtectedRouteLoged>
                  <ForgotPassword />
                </ProtectedRouteLoged>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
