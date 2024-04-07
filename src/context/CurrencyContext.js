import React, { createContext, useContext, useState, useEffect } from "react";

export const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const storedCurrency = localStorage.getItem("currency") || "USD";
    setCurrency(storedCurrency);
  }, []);

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, changeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
