import React from "react";
import "../App.css";

const ProductModal = ({ product, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>X</button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <span className="product-price">Rs.{product.price}</span>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductModal;
