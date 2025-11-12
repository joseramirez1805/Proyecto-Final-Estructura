import React from "react";
import { useCart } from "../context/CartContex";

export default function CajonCarrito() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart, open, closeCart } = useCart();

  if (!open) return null;

  const total = cart.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);

  return (
    <aside className="cart-drawer" role="dialog" aria-label="Carrito">
      <div className="cart-header">
        <h3>Carrito</h3>
        <button onClick={closeCart}>Cerrar</button>
      </div>

      <div className="queue-info">Tu carrito tiene {cart.length} productos</div>

      <div>
        {cart.map((p) => (
          <div className="cart-item" key={p.id}>
            <img src={p.image} alt={p.name} />
            <div className="meta">
              <p>{p.name}</p>
              <small>{p.category} {p.subcategory ? `• ${p.subcategory}` : ""}</small>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 6 }}>
                <button className="remove-btn" onClick={() => decreaseQty(p.id)}>-</button>
                <strong>{p.qty}</strong>
                <button onClick={() => addToCart(p)}>+</button>
                <strong style={{ marginLeft: 8 }}>${p.price * p.qty}</strong>
                <button className="remove-btn" onClick={() => removeFromCart(p.id)} style={{ marginLeft: 8 }}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
        {cart.length === 0 && <p>No hay productos en la cola.</p>}
      </div>

      <div className="cart-total">
        <span>Total</span>
        <span>${total}</span>
      </div>

      <button className="process-btn" onClick={() => { clearCart(); closeCart(); }}>Finalizar compra</button>
      <button className="clear-btn" onClick={clearCart}>Vaciar carrito</button>
    </aside>
  );
}
