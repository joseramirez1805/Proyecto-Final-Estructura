import React from "react";
import { useFavorites } from "../context/FavoritesContext";

export default function CajonFavoritos() {
  const { favorites, removeFavorite, popFavorite, clearFavorites, open, closeFavorites } = useFavorites();

  // favorites is bottom->top, mostrar top primero
  const items = favorites.slice().reverse();

  const total = items.reduce((s, i) => s + (i.price || 0), 0);

  return (
    <aside
      className={`cart-drawer ${open ? "open" : "closed"}`}
      role="dialog"
      aria-label="Favoritos"
      aria-hidden={!open}
    >
      <div className="cart-header">
        <h3>Favoritos</h3>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button onClick={() => { popFavorite(); }} title="Sacar último">Sacar último</button>
          <button onClick={closeFavorites}>Cerrar</button>
        </div>
      </div>

      <div className="queue-info">Tu lista de favoritos (Pila - LIFO): {items.length} producto(s)</div>

      <div style={{ marginTop: 12 }}>
        {items.length === 0 && <p style={{marginTop:18}}>Aún no hay favoritos.</p>}

        {items.map((p) => (
          <div className="cart-item" key={p.id} style={{justifyContent:'space-between'}}>
            <div style={{display:'flex',gap:12,alignItems:'center'}}>
              <img src={p.image} alt={p.name} style={{width:70,height:70,objectFit:'cover',borderRadius:8}} />
              <div className="meta">
                <p style={{marginBottom:6,fontWeight:700}}>{p.name}</p>
                <small style={{color:'#666'}}>{p.category} {p.subcategory ? `• ${p.subcategory}` : ""}</small>
                <div style={{marginTop:6}}>${(p.price || 0).toFixed(2)}</div>
              </div>
            </div>

            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:8}}>
              <button className="remove-btn" onClick={() => removeFavorite(p.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total" style={{marginTop:16}}>
        <div>Total:</div>
        <div>${total.toFixed(2)}</div>
      </div>

      <button className="process-btn" onClick={() => { alert("Demo: No hay proceso de compra para favoritos"); }}>Comprar favorito</button>
      <button className="clear-btn" onClick={clearFavorites}>Vaciar favoritos</button>
    </aside>
  );
}
