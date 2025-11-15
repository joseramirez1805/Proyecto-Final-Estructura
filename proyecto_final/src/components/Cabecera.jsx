import React, { useState, useRef, useEffect, useCallback } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContex";
import { useFavorites } from "../context/FavoritesContext";
import { useAuth } from "../context/AuthContext";
import { SUB_OPTIONS } from "../utils/datos";
import { createPortal } from "react-dom";

export default function Cabecera() {
  const { toggleCart, cart } = useCart();
  const { toggleFavorites, favorites } = useFavorites();
  const { user, loading, error: authErrorFromCtx, register, login, logout } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const [openKey, setOpenKey] = useState(null);
  const hideTimer = useRef(null);
  const location = useLocation();

  
  const [showAuth, setShowAuth] = useState(false);
  const [authTab, setAuthTab] = useState("login");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [localError, setLocalError] = useState("");

  
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

  useEffect(() => {
    if (!showAuth) return;
    const onKey = (e) => { if (e.key === "Escape") closeAuth(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showAuth]);

  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const auth = params.get('auth');
    if (auth === 'login' || auth === 'register') {
      setAuthTab(auth === 'register' ? 'register' : 'login');
      setShowAuth(true);
      setLocalError('');
    }
  }, [location.search]);
  
  const closeAuth = useCallback(() => {
    setShowAuth(false);
    try {
      const params = new URLSearchParams(location.search);
      params.delete('auth');
      params.delete('return');
      params.delete('ts');
      const base = location.pathname || '/';
      const search = params.toString();
      navigate(`${base}${search ? `?${search}` : ''}`, { replace: true });
    } catch (err) {
      console.warn(err);
    }
  }, [location.search, location.pathname, navigate]);

  
  useEffect(() => {
    const onDoc = (e) => {
      if (!userMenuRef.current) return;
      if (e.type === 'keydown' && e.key === 'Escape') { setUserMenuOpen(false); return; }
      if (e.type === 'mousedown' && !userMenuRef.current.contains(e.target)) setUserMenuOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onDoc);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onDoc);
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
     
      try {
        const params = new URLSearchParams(location.search);
        const ret = params.get('return');
        if (ret === 'cart') toggleCart();
  } catch (err) { console.warn(err); }
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
      
      try {
        const params = new URLSearchParams(location.search);
        const ret = params.get('return');
        if (ret === 'cart') {
          
          toggleCart();
        }
      } catch (err) { console.warn(err); }
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
                      {sub.toLowerCase() === "todas" ? "Todas" : sub}
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
            <div style={{ position: 'relative' }} ref={userMenuRef}>
              <button
                className="icon-btn"
                onClick={() => setUserMenuOpen((v) => !v)}
                title="Mi cuenta"
                aria-haspopup="true"
                aria-expanded={userMenuOpen}
              >
                <span style={{ width:24, height:24, borderRadius:999, background:'#0f172a', color:'#fff', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:12 }}>
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email || 'U').charAt(0).toUpperCase()}
                </span>
              </button>

              {userMenuOpen && (
                <div
                  role="menu"
                  aria-label="Menú de usuario"
                  style={{
                    position: 'absolute',
                    right: 0,
                    marginTop: 8,
                    background: '#fff',
                    borderRadius: 10,
                    boxShadow: '0 10px 30px rgba(2,6,23,0.12)',
                    padding: 8,
                    minWidth: 180,
                    zIndex: 1600
                  }}
                >
                  <div style={{ padding: '8px 10px', borderBottom: '1px solid #eef2f7', color: '#0f172a' }}>
                    <div style={{ fontWeight: 700 }}>{user.displayName || (user.email || 'Usuario')}</div>
                    {user.email && <div style={{ fontSize: 12, color: '#64748b' }}>{user.email}</div>}
                  </div>

                  <button
                    type="button"
                    onClick={async () => {
                      await logout();
                      setUserMenuOpen(false);
                      navigate('/seccion/inicio');
                    }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#b91c1c',
                      fontWeight: 700,
                    }}
                    role="menuitem"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
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

          <button
            type="button"
            className="icon-btn"
            title="Carrito"
            aria-label="Abrir carrito"
            onClick={toggleCart}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45C8.89 16.37 9.4 17 10.09 17h8.72v-2H10.42c-.06 0-.11-.03-.14-.08l.03-.06L11.1 14h5.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49L20.42 4H7z" fill="#0f172a" />
            </svg>

            {}
            {cart && cart.length > 0 && (
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  minWidth: 18,
                  height: 18,
                  padding: '0 6px',
                  borderRadius: 999,
                  background: '#ef4444',
                  color: '#fff',
                  fontSize: 12,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                }}
                className="cart-badge"
              >
                {cart.reduce((s, it) => s + (it.qty || 0), 0)}
              </span>
            )}
          </button>
        </div>
      </div>

      {}
      {showAuth && createPortal(
        <div
          className="auth-overlay"
          role="dialog"
          aria-modal="true"
          onClick={closeAuth} 
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1400,
            padding: 20
          }}
        >
          <div
            className="auth-modal"
            role="document"
            onClick={(e) => e.stopPropagation()} 
            style={{
              width: 520,
              maxWidth: "100%",
              borderRadius: 14,
              padding: 22,
              background: "#fff",
              boxShadow: "0 14px 40px rgba(2,6,23,0.18)",
              position: "relative"
            }}
          >
            <button
              aria-label="Cerrar"
              onClick={closeAuth}
              style={{ position: "absolute", right: 14, top: 10, background: "transparent", border: "none", fontSize: 22, cursor: "pointer" }}
            >
              ×
            </button>

            <h3 className="auth-title" style={{ margin: "6px 0 2px", fontSize: 20, color: "#0f172a" }}>Bienvenido a SHOP</h3>
            <p className="auth-sub" style={{ margin: 0, color: "#64748b", fontSize: 13 }}>Crea una cuenta o inicia sesión para continuar</p>

            <div style={{ display: "flex", gap: 8, background: "#f1f5f9", padding: 6, borderRadius: 999, marginTop: 14 }}>
              <button
                onClick={() => setAuthTab("register")}
                className={authTab === "register" ? "tab active" : "tab"}
                style={{
                  flex: 1,
                  padding: 10,
                  borderRadius: 999,
                  border: "none",
                  background: authTab === "register" ? "#fff" : "transparent",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Registrarse
              </button>
              <button
                onClick={() => setAuthTab("login")}
                className={authTab === "login" ? "tab active" : "tab"}
                style={{
                  flex: 1,
                  padding: 10,
                  borderRadius: 999,
                  border: "none",
                  background: authTab === "login" ? "#fff" : "transparent",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Iniciar Sesión
              </button>
            </div>

            <div style={{ marginTop: 16 }}>
              {authTab === "register" ? (
                <form className="auth-form" onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {(localError || authErrorFromCtx) && <p style={{ color: "#b91c1c", margin: 0 }}>{localError || authErrorFromCtx}</p>}

                  <label style={{ fontSize: 13, color: "#475569" }}>Nombre completo</label>
                  <input value={regName} onChange={(e) => setRegName(e.target.value)} placeholder="Juan Pérez" style={{ padding: "14px 16px", borderRadius: 12, border: "1px solid #e6edf3", background: "#fbfdff", outline: "none" }} />

                  <label style={{ fontSize: 13, color: "#475569" }}>Email</label>
                  <input value={regEmail} onChange={(e) => setRegEmail(e.target.value)} placeholder="tu@email.com" style={{ padding: "14px 16px", borderRadius: 12, border: "1px solid #e6edf3", background: "#fbfdff" }} />

                  <label style={{ fontSize: 13, color: "#475569" }}>Contraseña</label>
                  <input type="password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} placeholder="••••••••" style={{ padding: "14px 16px", borderRadius: 12, border: "1px solid #e6edf3", background: "#fbfdff" }} />

                  <label style={{ fontSize: 13, color: "#475569" }}>Confirmar contraseña</label>
                  <input type="password" value={regConfirm} onChange={(e) => setRegConfirm(e.target.value)} placeholder="••••••••" style={{ padding: "14px 16px", borderRadius: 12, border: "1px solid #e6edf3", background: "#fbfdff" }} />

                  <button className="primary" disabled={loading} style={{ marginTop: 6, background: "#0f172a", color: "#fff", border: "none", padding: "14px 16px", borderRadius: 12, fontWeight: 700, cursor: "pointer" }}>
                    {loading ? "Creando..." : "Crear cuenta"}
                  </button>

                  <p style={{ textAlign: "center", color: "#475569", marginTop: 6 }}>
                    ¿Ya tienes cuenta? <button type="button" onClick={() => setAuthTab("login")} style={{ background: "none", border: "none", color: "#0f172a", fontWeight: 700, cursor: "pointer" }}>Inicia sesión aquí</button>
                  </p>
                </form>
              ) : (
                <form className="auth-form" onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {(localError || authErrorFromCtx) && <p style={{ color: "#b91c1c", margin: 0 }}>{localError || authErrorFromCtx}</p>}

                  <label style={{ fontSize: 13, color: "#475569" }}>Email</label>
                  <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="tu@email.com" style={{ padding: "14px 16px", borderRadius: 12, border: "1px solid #e6edf3", background: "#fbfdff" }} />

                  <label style={{ fontSize: 13, color: "#475569" }}>Contraseña</label>
                  <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="••••••••" style={{ padding: "14px 16px", borderRadius: 12, border: "1px solid #e6edf3", background: "#fbfdff" }} />

                  <button className="primary" disabled={loading} style={{ marginTop: 6, background: "#0f172a", color: "#fff", border: "none", padding: "14px 16px", borderRadius: 12, fontWeight: 700, cursor: "pointer" }}>
                    {loading ? "Entrando..." : "Iniciar sesión"}
                  </button>

                  <p style={{ textAlign: "center", color: "#475569", marginTop: 6 }}>
                    ¿No tienes cuenta? <button type="button" onClick={() => setAuthTab("register")} style={{ background: "none", border: "none", color: "#0f172a", fontWeight: 700, cursor: "pointer" }}>Regístrate aquí</button>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

      {}
    </header>
  );
}
