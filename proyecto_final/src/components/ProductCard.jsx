import React from "react";
import { useCart } from "../context/CartContex";

export default function ProductCard({ item }) {
  const { addToCart } = useCart();

  return (
    <article className="card">
      <div style={{ position: "relative" }}>
        <img src={item.image} alt={item.name} />
        {item.badge && (
          <div className={`badge ${item.badge === "discount" ? "discount" : "new"}`}>
            {item.badge === "discount" ? "Oferta" : "Nuevo"}
          </div>
        )}
        <button className="favorite-btn" aria-label="favorito">❤</button>

        <div className="overlay-btn" onClick={() => addToCart(item)}>
          <span>Añadir</span>
        </div>
      </div>

      <div className="card-info">
        <div className="category">{item.category} {item.subcategory ? `• ${item.subcategory}` : ""}</div>
        <div className="name">{item.name}</div>
        <div className="price">
          ${item.price}
          {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
        </div>
      </div>
    </article>
  );
}
