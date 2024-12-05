import React from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";

const CartPage = ({ cartItems, removeFromCart }) => (
  <div>
    
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  </div>
);

export default CartPage;
