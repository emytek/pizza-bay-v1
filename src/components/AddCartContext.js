'use client';
import React, { createContext, useContext, useState } from 'react';

// Create a context to manage the cart state
const AddCartContext = createContext();

// Custom hook to use the AddCartContext
export const useCart = () => useContext(AddCartContext);

// CartProvider component to wrap the application and provide the context
export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product, size = null, extras = []) => {
    const cartProduct = { ...product, size, extras };
    setCartProducts((prevProducts) => [...prevProducts, cartProduct]);
  };

  return (
    <AddCartContext.Provider value={{ cartProducts, addToCart }}>
      {children}
    </AddCartContext.Provider>
  );
};
