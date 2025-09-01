import React from "react";
import "../App.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="product-price">Rs.{product.price}</span>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
