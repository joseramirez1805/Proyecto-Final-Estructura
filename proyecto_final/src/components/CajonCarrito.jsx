import React, { useState } from "react";
import { useCart } from "../context/CartContex";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CajonCarrito() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart, open, closeCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [orderMsg, setOrderMsg] = useState("");

  
  const total = cart.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);

  return (
    <aside
      className={`cart-drawer ${open ? "open" : "closed"}`}
      role="dialog"
      aria-label="Carrito"
      aria-hidden={!open}
    >
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
                <strong style={{ marginLeft: 8 }}>${(p.price * p.qty).toFixed(2)}</strong>
                <button className="remove-btn" onClick={() => removeFromCart(p.id)} style={{ marginLeft: 8 }}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
        {cart.length === 0 && <p>No hay productos en la cola.</p>}
      </div>

      <div className="cart-total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {orderMsg ? (
        <div style={{ padding: 12, background: '#ecfdf5', borderRadius: 8, color: '#065f46', marginBottom: 10 }}>{orderMsg}</div>
      ) : null}

      {user ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ fontSize: 13, color: '#475569' }}>Dirección de entrega</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Calle, número, ciudad, código postal" style={{ padding: 10, borderRadius: 8, border: '1px solid #e6edf3' }} />
          <div style={{ fontSize: 13, color: '#334155' }}>Método de pago: <strong>Pago contra entrega</strong></div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              className="process-btn"
              onClick={() => {
                if (!address || address.trim().length < 5) {
                  setOrderMsg('Por favor ingresa una dirección válida.');
                  return;
                }
                const name = user.displayName || (user.email ? user.email.split('@')[0] : 'Cliente');
                setOrderMsg(`Felicitaciones por tu compra ${name}, tu pedido llegará en las próximas 24 horas.`);
                
                clearCart();
                setTimeout(() => {
                  closeCart();
                }, 1200);
              }}
            >
              Pedir
            </button>
            <button className="clear-btn" onClick={() => { setAddress(''); setOrderMsg(''); }}>Cancelar</button>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            className="process-btn"
            onClick={() => {
             
              navigate(`/seccion/inicio?auth=login&return=cart&ts=${Date.now()}`);
            }}
          >
            Finalizar compra
          </button>
          <button className="clear-btn" onClick={clearCart}>Vaciar carrito</button>
        </div>
      )}
    </aside>
  );
}
