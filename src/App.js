import React, { useState } from "react";
import { products } from "./data";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import './App.css';


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <HomePage addToCart={addToCart} />
      <CartPage cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
