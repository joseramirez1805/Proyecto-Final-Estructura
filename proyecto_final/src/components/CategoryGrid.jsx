import React from "react";
import ProductCard from "./ProductCard";

export default function CategoryGrid({ items = [] }) {
  return (
    <section className="product-grid">
      {items.map(item => (
        <ProductCard key={item.id + (item._uid || "")} item={item} />
      ))}
      {items.length === 0 && <p>No hay productos en esta sección.</p>}
    </section>
  );
}
