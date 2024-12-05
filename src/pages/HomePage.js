import React from "react";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import { products } from "../data";

const HomePage = ({ addToCart }) => (
  <div>
    <Header />
    <ProductList products={products} addToCart={addToCart} />
  </div>
);

export default HomePage;
