import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{ color: "red", fontSize: "2rem" }}
      className="home d-flex justify-content-center align-items-center"
    >
      <Link to="/tienda" className="btn-home slide-in-blurred-left">
        Ir a la tienda
      </Link>
    </div>
  );
};

export default Home;
