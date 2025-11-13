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
  const [showAuth, setShowAuth] = useState(false);
  const [authTab, setAuthTab] = useState("register");
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

          {/* Icono Favoritos */}
          <Link
            to="/favoritos"
            className="icon-btn"
            title="Favoritos"
            aria-label="Favoritos"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12.1 21.35l-1.1-.99C5.14 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.99 3.57 2.36h.87C13.46 4.99 14.96 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.14 6.86-8.9 11.86l-1.0.99z" fill="#e11d48" />
            </svg>
          </Link>

          {/* Icono Usuario / Login (abre modal) */}
          <button
            type="button"
            onClick={() => { setShowAuth(true); setAuthTab('login'); }}
            className="icon-btn"
            title="Iniciar sesión"
            aria-label="Iniciar sesión"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#0f172a" />
            </svg>
          </button>

          <button onClick={toggleCart} style={{ padding: 8, borderRadius: 8 }}>Carrito</button>
        </div>
      </div>

      {/* Modal de autenticación */}
      {showAuth && (
        <div className="auth-overlay" role="dialog" aria-modal="true">
          <div className="auth-modal" role="document">
            <button className="auth-close" aria-label="Cerrar" onClick={() => setShowAuth(false)}>×</button>

            <h3 className="auth-title">Bienvenido a SHOP</h3>
            <p className="auth-sub">Crea una cuenta o inicia sesión para continuar</p>

            <div className="auth-tabs" role="tablist">
              <button className={authTab === 'register' ? 'tab active' : 'tab'} onClick={() => setAuthTab('register')}>Registrarse</button>
              <button className={authTab === 'login' ? 'tab active' : 'tab'} onClick={() => setAuthTab('login')}>Iniciar Sesión</button>
            </div>

            {authTab === 'register' ? (
              <form className="auth-form" onSubmit={(e) => { e.preventDefault(); /* integrar auth */ }}>
                <label>Nombre completo</label>
                <input placeholder="Juan Pérez" />
                <label>Email</label>
                <input placeholder="tu@email.com" />
                <label>Contraseña</label>
                <input type="password" placeholder="••••••••" />
                <label>Confirmar contraseña</label>
                <input type="password" placeholder="••••••••" />
                <button className="primary">Crear cuenta</button>
                <p className="auth-foot">¿Ya tienes cuenta? <button type="button" className="link-like" onClick={() => setAuthTab('login')}>Inicia sesión aquí</button></p>
              </form>
            ) : (
              <form className="auth-form" onSubmit={(e) => { e.preventDefault(); /* integrar login */ }}>
                <label>Email</label>
                <input placeholder="tu@email.com" />
                <label>Contraseña</label>
                <input type="password" placeholder="••••••••" />
                <button className="primary">Iniciar Sesión</button>
                <p className="auth-foot">¿No tienes cuenta? <button type="button" className="link-like" onClick={() => setAuthTab('register')}>Regístrate aquí</button></p>
              </form>
            )}
          </div>
        </div>
      )}

  {/* estilos inline mínimos para evitar dependencias; el resto está en index.css */}
  <style>{`.menu .nav-item { padding:8px 12px; border-radius:8px; text-decoration:none; color:#222; display:inline-flex; gap:8px; align-items:center; } .menu .nav-item.active { background:#f1f5f9; box-shadow: 0 1px 0 rgba(0,0,0,0.05) inset; }
.icon-btn { background: transparent; border: none; padding:6px; border-radius:8px; cursor: pointer; color: inherit; }
.icon-btn svg { display: block; }
.icon-btn:hover { background: rgba(15,23,42,0.06); }

/* Modal autenticación */
.auth-overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.45); display:flex; align-items:center; justify-content:center; z-index:1200; padding: 24px; }
.auth-modal { width: 420px; max-width: calc(100% - 48px); background: #fff; border-radius:12px; padding: 22px; box-shadow: 0 10px 30px rgba(2,6,23,0.4); position: relative; }
.auth-close { position: absolute; right: 12px; top: 8px; background: transparent; border: none; font-size: 20px; line-height:1; cursor:pointer; }
.auth-title { margin: 6px 0 2px; font-size: 18px; color: #0f172a; }
.auth-sub { margin: 0 0 12px; color: #64748b; font-size: 13px; }
.auth-tabs { display:flex; gap:8px; background:#f1f5f9; padding:6px; border-radius:999px; width:100%; margin-bottom:14px; }
.tab { flex:1; background:transparent; border:none; padding:8px; border-radius:999px; cursor:pointer; font-weight:600; color:#475569; }
.tab.active { background: #fff; box-shadow: 0 1px 0 rgba(2,6,23,0.06) inset; }
.auth-form { display:flex; flex-direction:column; gap:10px; }
.auth-form label { font-size:13px; color:#475569; }
.auth-form input { padding:12px 14px; border-radius:8px; border:1px solid #e6edf3; background:#f8fafc; outline:none; }
.auth-form input:focus { box-shadow: 0 0 0 3px rgba(99,102,241,0.06); border-color:#c7d2fe; }
.primary { margin-top:8px; background:#0f172a; color:#fff; border:none; padding:12px; border-radius:8px; cursor:pointer; font-weight:600; }
.auth-foot { text-align:center; color:#475569; font-size:13px; margin-top:8px; }
.link-like { background:none; border:none; color:#0f172a; font-weight:600; cursor:pointer; padding:0; }
`}</style>
    </header>
  );
}
