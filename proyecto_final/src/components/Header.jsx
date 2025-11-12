import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContex";

const SUBS = {
  inicio: ["Ropa", "Zapatos", "Accesorios"],
  hombres: ["Ropa", "Zapatos"],
  mujeres: ["Ropa", "Zapatos"],
  accesorios: ["Accesorios"],
  ofertas: ["Ropa", "Zapatos", "Accesorios"],
};

export default function Header() {
  const { toggleCart } = useCart();

  return (
    <header className="header">
      <div className="header-content container" style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/seccion/inicio" className="logo">
            MiTienda
          </Link>

          <nav
            className="menu"
            aria-label="main"
            style={{ position: "relative", display: "flex", gap: 8 }}
          >
            {Object.keys(SUBS).map((key) => (
              <div key={key} style={{ position: "relative" }}>
                <NavLink
                  to={`/seccion/${key}`}
                  style={({ isActive }) => ({
                    margin: "0 8px",
                    fontWeight: isActive ? 700 : 500,
                    textDecoration: "none",
                    color: "#222",
                  })}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </NavLink>

                {}
                <div
                  className="nav-dropdown"
                  style={{
                    position: "absolute",
                    top: "32px",
                    left: 0,
                    background: "#fff",
                    border: "1px solid #eee",
                    padding: 8,
                    borderRadius: 8,
                    minWidth: 140,
                    display: "none",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  }}
                >
                  {SUBS[key].map((sub) => (
                    <Link
                      key={sub}
                      to={`/seccion/${key}?sub=${encodeURIComponent(sub)}`}
                      style={{
                        display: "block",
                        padding: "6px 8px",
                        textDecoration: "none",
                        color: "#111",
                      }}
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
          <button
            onClick={toggleCart}
            style={{
              padding: 8,
              borderRadius: 8,
              textDecoration: "none",
              color: "#111",
            }}
          >
            Carrito
          </button>
        </div>
      </div>

      {}
      <style>{`.menu > div:hover .nav-dropdown { display:block; }`}</style>
    </header>
  );
}
