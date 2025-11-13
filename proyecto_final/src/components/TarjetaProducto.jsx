import React from "react";
import { useCart } from "../context/CartContex";
import { useFavorites } from "../context/FavoritesContext";
import { FiShoppingCart } from "react-icons/fi";

export default function TarjetaProducto({ item, style }) {
  const { addToCart } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const fav = isFavorite(item.id);

  return (
    <article className="card" style={style}>
      <div style={{ position: "relative" }}>
        <img src={item.image} alt={item.name} />
        {item.badge && (
          <div className={`badge ${item.badge === "discount" ? "discount" : "new"}`}>
            {item.badge === "discount" ? "Oferta" : "Nuevo"}
          </div>
        )}
        <button
          className="favorite-btn"
          aria-label={fav ? "Quitar de favoritos" : "Añadir a favoritos"}
          onClick={() => (fav ? removeFavorite(item.id) : addFavorite(item))}
        >
          {fav ? "♥" : "♡"}
        </button>

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
