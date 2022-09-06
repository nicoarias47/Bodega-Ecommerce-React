import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//VIEWS
import Home from "./views/Home";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

// CSS
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
