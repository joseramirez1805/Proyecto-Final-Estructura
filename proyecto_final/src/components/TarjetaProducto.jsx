import React from "react";
import { useCart } from "../context/CartContex";
import { FiShoppingCart } from "react-icons/fi";

export default function TarjetaProducto({ item }) {
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

        {/* Botón overlay: ahora muestra icono + texto 'Agregar al Carrito' pero mantiene la misma funcionalidad */}
        <button type="button" className="overlay-btn" onClick={() => addToCart(item)} aria-label={`Agregar ${item.name} al carrito`}>
          <FiShoppingCart style={{ marginRight: 8 }} />
          <span>Agregar al Carrito</span>
        </button>
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
