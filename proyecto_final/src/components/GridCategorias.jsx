import React from "react";
import TarjetaProducto from "./TarjetaProducto";

export default function GridCategorias({ items = [] }) {
  return (
    <section className="product-grid">
      {items.map((item) => (
        <TarjetaProducto key={item.id} item={item} />
      ))}
      {items.length === 0 && <p>No hay productos en esta sección.</p>}
    </section>
  );
}
