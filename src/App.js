import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ShopList from "./components/ShopList/ShopList";

//VIEWS
import Home from "./views/Home";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

// CSS
import "./App.css";

function App() {
  return (
    <DataProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<ShopList />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
