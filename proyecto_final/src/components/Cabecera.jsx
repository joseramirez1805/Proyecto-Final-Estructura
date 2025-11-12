import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContex";

const SUBS = {
  inicio: ["Todas", "Ropa", "Zapatos", "Accesorios", "Chaquetas"],
  hombres: ["Todos", "Camisetas", "Pantalones", "Zapatos", "Chaquetas", "Abrigos"],
  mujeres: ["Todos", "Vestidos", "Tops", "Pantalones", "Zapatos", "Bolsos"],
  accesorios: ["Todos", "Sombreros", "Cinturones", "Relojes", "Gafas", "Bolsos"],
  ofertas: ["Todos", "Ropa", "Zapatos", "Accesorios"],
};

export default function Cabecera() {
  const { toggleCart } = useCart();
  const [openKey, setOpenKey] = useState(null);
  const hideTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const handleEnter = (key) => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    setOpenKey(key);
  };

  const handleLeave = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setOpenKey(null), 200); // delay to allow mouse move
  };

  return (
    <header className="header">
      <div className="header-content container" style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/seccion/inicio" className="logo">MiTienda</Link>

          <nav className="menu" aria-label="main" style={{ position: "relative", display: "flex", gap: 8 }}>
            {Object.keys(SUBS).map((key) => (
              <div
                key={key}
                className={`nav-item-wrapper ${openKey === key ? "open" : ""}`}
                onMouseEnter={() => handleEnter(key)}
                onMouseLeave={handleLeave}
                style={{ position: "relative" }}
              >
                <NavLink
                  to={`/seccion/${key}`}
                  className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                >
                  <span className="nav-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  <span className="nav-caret">▾</span>
                </NavLink>

                <div
                  className="nav-dropdown"
                  onMouseEnter={() => { if (hideTimer.current) { clearTimeout(hideTimer.current); hideTimer.current = null; } }}
                  onMouseLeave={handleLeave}
                  aria-hidden={openKey !== key}
                >
                  {SUBS[key].map((sub) => (
                    <Link
                      key={sub}
                      to={`/seccion/${key}?sub=${encodeURIComponent(sub)}`}
                      className="nav-dropdown-link"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="search-bar">
            <input placeholder="Buscar productos..." />
          </div>
          <button onClick={toggleCart} style={{ padding: 8, borderRadius: 8 }}>Carrito</button>
        </div>
      </div>

      {/* estilos inline mínimos para evitar dependencias; el resto está en index.css */}
      <style>{`.menu .nav-item { padding:8px 12px; border-radius:8px; text-decoration:none; color:#222; display:inline-flex; gap:8px; align-items:center; } .menu .nav-item.active { background:#f1f5f9; box-shadow: 0 1px 0 rgba(0,0,0,0.05) inset; }`}</style>
    </header>
  );
}
