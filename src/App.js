import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import CartPage from "./components/CartPage";
import "./App.css";

// Import images
import pizzaImage from "./images/pizza.jpg";
import burgerImage from "./images/burger.jpg";
import pastaImage from "./images/pasta.jpg";

// Sample data for products
const sampleProducts = [
  { id: 1, name: "Pizza", description: "Delicious cheese pizza", price: 199, image: pizzaImage },
  { id: 2, name: "Burger", description: "Juicy beef burger", price: 89, image: burgerImage },
  { id: 3, name: "Pasta", description: "Creamy Alfredo pasta", price: 129, image: pastaImage }];

function App() {
  const [cart, setCart] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // Open product modal
  const openModal = (product) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  // Close product modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalProduct(null);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1>Our Food Items</h1>
                  <div className="product-list">
                    {sampleProducts.map((product) => (
                      <div key={product.id} onClick={() => openModal(product)}>
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage cartItems={cart} totalPrice={cart.reduce((acc, item) => acc + item.price * item.quantity, 0)} />
              }
            />
            <Route
              path="/products"
              element={
                <div>
                  <h1>Products</h1>
                  <div className="product-list">
                    {sampleProducts.map((product) => (
                      <div key={product.id} onClick={() => openModal(product)}>
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              }
            />
          </Routes>
        </div>

        {isModalOpen && modalProduct && (
          <ProductModal product={modalProduct} isOpen={isModalOpen} closeModal={closeModal} />
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
