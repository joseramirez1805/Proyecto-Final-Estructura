import React from "react";
import { useCart } from "../context/CartContex";
export default function CardItem({ product }) {
  const { addToCart } = useCart();
  const { name, image, price, oldPrice, discount, isNew, category } = product;

  return (
    <div className="card">
      {discount && <div className="badge discount">-{discount}%</div>}
      {isNew && <div className="badge new">Nuevo</div>}
      <img src={image} alt={name} />
      <button className="favorite-btn" aria-label="fav">♡</button>

      <div className="card-info">
        <p className="category">{category}</p>
        <h4 className="name">{name}</h4>
        <div className="price">
          <span>${price.toFixed(2)}</span>
          {oldPrice && <span className="old-price">${oldPrice}</span>}
        </div>

        {/* overlay shown on hover (handled by CSS) */}
        <div className="overlay-btn" onClick={() => addToCart(product)}>
          <span>🛒</span>
          <span>Agregar al Carrito</span>
        </div>
      </div>
    </div>
  );
}
