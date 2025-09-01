import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/orders">Orders</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
