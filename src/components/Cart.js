import React from "react";

const Cart = ({ cartItems, removeFromCart }) => (
  <div className="cart">
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <p>{item.name}</p>
                <p>Price: ₹{item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <h3>Total: ₹{cartItems.reduce((total, item) => total + item.price, 0)}</h3>
      </div>
    )}
  </div>
);

export default Cart;
