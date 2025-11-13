import React from "react";
import TarjetaProducto from "./TarjetaProducto";

export default function GridCategorias({ items = [] }) {
  return (
    <section className="product-grid">
      {items.map((item, idx) => (
        <TarjetaProducto
          key={item.id}
          item={item}
          style={{ animationDelay: `${idx * 70}ms` }}
        />
      ))}
      {items.length === 0 && <p>No hay productos en esta sección.</p>}
    </section>
  );
}
