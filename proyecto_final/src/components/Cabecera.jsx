import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContex";
import { useFavorites } from "../context/FavoritesContext";
import { useAuth } from "../context/AuthContext";
import { SUB_OPTIONS } from "../utils/datos";

export default function Cabecera() {
  const { toggleCart, cart } = useCart();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = React.useState("");
  const { toggleFavorites, favorites } = useFavorites();
  const { user, loading, error: authErrorFromCtx, register, login } = useAuth();

  const [openKey, setOpenKey] = useState(null);
  const hideTimer = useRef(null);

  // auth modal state
  const [showAuth, setShowAuth] = useState(false);
  const [authTab, setAuthTab] = useState("login");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [localError, setLocalError] = useState("");

  // favorito pulse
  const [favPulse, setFavPulse] = useState(false);
  useEffect(() => {
    setFavPulse(true);
    const t = setTimeout(() => setFavPulse(false), 420);
    return () => clearTimeout(t);
  }, [favorites?.length]);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const handleEnter = (key) => {
    if (hideTimer.current) { clearTimeout(hideTimer.current); hideTimer.current = null; }
    setOpenKey(key);
  };
  const handleLeave = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setOpenKey(null), 180);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLocalError("");
    if (!regName || !regEmail || !regPassword) {
      setLocalError("Rellena los campos obligatorios.");
      return;
    }
    if (regPassword !== regConfirm) {
      setLocalError("Las contraseñas no coinciden.");
      return;
    }
    const res = await register(regName.trim(), regEmail.trim(), regPassword);
    if (res.ok) {
      setShowAuth(false);
      setRegName(""); setRegEmail(""); setRegPassword(""); setRegConfirm("");
    } else {
      setLocalError(res.error || "Error al crear la cuenta.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLocalError("");
    if (!loginEmail || !loginPassword) { setLocalError("Rellena email y contraseña."); return; }
    const res = await login(loginEmail.trim(), loginPassword);
    if (res.ok) {
      setShowAuth(false);
      setLoginEmail(""); setLoginPassword("");
    } else {
      setLocalError(res.error || "Error al iniciar sesión.");
    }
  };

  return (
    <header className="header">
      <div className="header-content container" style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/seccion/inicio" className="logo">MiTienda</Link>

          <nav className="menu" aria-label="main" style={{ position: "relative", display: "flex", gap: 8 }}>
            {Object.keys(SUB_OPTIONS).map((key) => (
              <div
                key={key}
                className={`nav-item-wrapper ${openKey === key ? "open" : ""}`}
                onMouseEnter={() => handleEnter(key)}
                onMouseLeave={handleLeave}
                style={{ position: "relative" }}
              >
                <NavLink to={`/seccion/${key}`} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                  <span className="nav-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  <span className="nav-caret">▾</span>
                </NavLink>

                <div
                  className="nav-dropdown"
                  onMouseEnter={() => { if (hideTimer.current) { clearTimeout(hideTimer.current); hideTimer.current = null; } }}
                  onMouseLeave={handleLeave}
                  aria-hidden={openKey !== key}
                >
                  {SUB_OPTIONS[key].map((sub) => (
                    <Link
                      key={sub}
                      to={`/seccion/${key}${sub.toLowerCase() === "todas" ? "" : `?sub=${encodeURIComponent(sub)}`}`}
                      className="nav-dropdown-link"
                    >
                      {sub === "todas" || sub === "todas" ? "Todas" : sub}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="search-bar">
            <form onSubmit={(e) => {
              e.preventDefault();
              const q = (searchTerm || "").trim();
              if (!q) return;
              // navegar a la sección de inicio con el query q
              navigate(`/seccion/inicio?q=${encodeURIComponent(q)}`);
            }}>
              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar productos..." />
            </form>
          </div>

          <button
            type="button"
            className="icon-btn"
            title="Favoritos"
            aria-label="Favoritos"
            onClick={toggleFavorites}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12.1 21.35l-1.1-.99C5.14 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.99 3.57 2.36h.87C13.46 4.99 14.96 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.14 6.86-8.9 11.86l-1.0.99z" fill="#e11d48" />
            </svg>

            {favorites?.length > 0 && (
              <span className={`favorite-badge ${favPulse ? "pop" : ""}`} aria-hidden>
                {favorites.length}
              </span>
            )}
          </button>

          {user ? (
            <div style={{ position: 'relative' }}>
              <button className="icon-btn" onClick={() => {}} title="Mi cuenta" aria-haspopup="true">
                <span style={{ width:24, height:24, borderRadius:999, background:'#0f172a', color:'#fff', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:12 }}>
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email || 'U').charAt(0).toUpperCase()}
                </span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => { setShowAuth(true); setAuthTab('login'); setLocalError(""); }}
              className="icon-btn"
              title="Iniciar sesión"
              aria-label="Iniciar sesión"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#0f172a" />
              </svg>
            </button>
          )}

          {/* Botón de carrito: icono + contador */}
          <button
            onClick={toggleCart}
            className="icon-btn"
            title="Carrito"
            aria-label="Carrito"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding:8, borderRadius:8, position: 'relative' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45C8.89 16.37 9.5 17.5 10.5 17.5h8v-2h-7.1c-.14 0-.25-.11-.25-.25l.03-.12L14.1 12h4.45c.75 0 1.41-.41 1.75-1.03l1.95-3.93L20.42 4H7z" fill="#0f172a"/>
            </svg>
            {/* mostrar contador si hay items en el carrito */}
            {cart?.length > 0 && (
              <span className="cart-badge" aria-hidden>{cart.length}</span>
            )}
          </button>
        </div>
      </div>

      {showAuth && (
        <div className="auth-overlay" role="dialog" aria-modal="true">
          <div className="auth-modal" role="document">
            <button className="auth-close" aria-label="Cerrar" onClick={() => setShowAuth(false)}>×</button>

            <h3 className="auth-title">Bienvenido</h3>
            <p className="auth-sub">Accede o crea una cuenta</p>

            <div className="auth-tabs" role="tablist">
              <button className={authTab === 'register' ? 'tab active' : 'tab'} onClick={() => setAuthTab('register')}>Registrarse</button>
              <button className={authTab === 'login' ? 'tab active' : 'tab'} onClick={() => setAuthTab('login')}>Iniciar Sesión</button>
            </div>

            {authTab === 'register' ? (
              <form className="auth-form" onSubmit={handleRegister}>
                {(localError || authErrorFromCtx) && <p style={{ color: '#b91c1c' }}>{localError || authErrorFromCtx}</p>}
                <label>Nombre completo</label>
                <input value={regName} onChange={(e) => setRegName(e.target.value)} placeholder="Juan Pérez" />
                <label>Email</label>
                <input value={regEmail} onChange={(e) => setRegEmail(e.target.value)} placeholder="tu@email.com" />
                <label>Contraseña</label>
                <input type="password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} placeholder="••••••••" />
                <label>Confirmar contraseña</label>
                <input type="password" value={regConfirm} onChange={(e) => setRegConfirm(e.target.value)} placeholder="••••••••" />
                <button className="primary" disabled={loading}>{loading ? 'Creando...' : 'Crear cuenta'}</button>
              </form>
            ) : (
              <form className="auth-form" onSubmit={handleLogin}>
                {(localError || authErrorFromCtx) && <p style={{ color: '#b91c1c' }}>{localError || authErrorFromCtx}</p>}
                <label>Email</label>
                <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="tu@email.com" />
                <label>Contraseña</label>
                <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="••••••••" />
                <button className="primary" disabled={loading}>{loading ? 'Entrando...' : 'Iniciar Sesión'}</button>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`.menu .nav-item { padding:8px 12px; border-radius:8px; text-decoration:none; color:#222; display:inline-flex; gap:8px; align-items:center; } .menu .nav-item.active { background:#f1f5f9; } .icon-btn { background: transparent; border: none; padding:6px; border-radius:8px; cursor: pointer; color: inherit; } .auth-overlay { position: fixed; inset: 0; background: rgba(15,23,42,0.45); display:flex; align-items:center; justify-content:center; z-index:1200; padding: 24px; } .auth-modal { width: 420px; max-width: calc(100% - 48px); background: #fff; border-radius:12px; padding: 22px; box-shadow: 0 10px 30px rgba(2,6,23,0.4); } .primary { margin-top:8px; background:#0f172a; color:#fff; border:none; padding:12px; border-radius:8px; cursor:pointer; font-weight:600; }`}</style>
    </header>
  );
}
