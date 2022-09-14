import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [vinos, setVinos] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
      let resp = await fetch(url);
      let data = await resp.json();

      setVinos(data);
    };
    getData("http://localhost:5000/vinos");
  }, []);

  return (
    <DataContext.Provider value={{ vinos, setVinos, cartList, setCartList }}>
      {children}
    </DataContext.Provider>
  );
};
