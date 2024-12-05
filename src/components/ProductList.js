import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low-to-high") return a.price - b.price;
    if (sort === "high-to-low") return b.price - a.price;
    return 0;
  });

  const filteredProducts = sortedProducts.filter(product =>
    filter ? product.category === filter : true
  );

  return (
    <div>
      <div className="controls">
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Filter By</option>
          <option value="Clothing">Clothing</option>
          <option value="Footwear">Footwear</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
