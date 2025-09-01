import React from "react";
import "../App.css";

const CartPage = ({ cartItems, totalPrice }) => {
  return (
    <div className="cart-page container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <span>${item.price}</span>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="total-price">
        <h3>Total: Rs.{totalPrice}</h3>
      </div>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
