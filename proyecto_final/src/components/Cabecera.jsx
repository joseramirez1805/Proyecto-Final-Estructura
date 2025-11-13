import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContex";
import { useFavorites } from "../context/FavoritesContext"; // <- agregado
import { useAuth } from "../context/AuthContext";

const SUBS = {
  inicio: ["Todas", "Ropa", "Zapatos", "Accesorios", "Chaquetas"],
  hombres: ["Todos", "Camisetas", "Pantalones", "Zapatos", "Chaquetas", "Abrigos"],
  mujeres: ["Todos", "Vestidos", "Tops", "Pantalones", "Zapatos", "Bolsos"],
  accesorios: ["Todos", "Sombreros", "Cinturones", "Relojes", "Gafas", "Bolsos"],
  ofertas: ["Todos", "Ropa", "Zapatos", "Accesorios"],
};

export default function Cabecera() {
  const { toggleCart } = useCart();
  const { toggleFavorites } = useFavorites(); // <- agregado
  const [openKey, setOpenKey] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authTab, setAuthTab] = useState("register");
  const hideTimer = useRef(null);
  // auth (moved to AuthContext)
  const { user, loading, error: authErrorFromCtx, register, login, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // local form states & validation
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [localError, setLocalError] = useState("");

  useEffect(() => {
    // cleanup hideTimer on unmount
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

  // useAuth.register/login handle actual Firebase calls; keep client-side validation here
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
    const result = await register(regName.trim(), regEmail.trim(), regPassword);
    if (result.ok) {
      setShowAuth(false);
      setRegName(""); setRegEmail(""); setRegPassword(""); setRegConfirm("");
      setLocalError("");
    } else {
      setLocalError(result.error || "Error al crear la cuenta.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLocalError("");
    if (!loginEmail || !loginPassword) {
      setLocalError("Rellena email y contraseña.");
      return;
    }
    const result = await login(loginEmail.trim(), loginPassword);
    if (result.ok) {
      setShowAuth(false);
      setLoginEmail(""); setLoginPassword("");
      setLocalError("");
    } else {
      setLocalError(result.error || "Error al iniciar sesión.");
    }
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

          {/* Icono Favoritos: ahora abre cajón en vez de navegar */}
          <button
            type="button"
            className="icon-btn"
            title="Favoritos"
            aria-label="Favoritos"
            onClick={toggleFavorites}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12.1 21.35l-1.1-.99C5.14 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.99 3.57 2.36h.87C13.46 4.99 14.96 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.14 6.86-8.9 11.86l-1.0.99z" fill="#e11d48" />
            </svg>
          </button>

          {/* Usuario: si está logueado mostrar menú, si no abrir modal */}
          {user ? (
            <div style={{ position: 'relative' }}>
              <button
                className="icon-btn"
                onClick={() => setUserMenuOpen((s) => !s)}
                aria-haspopup="true"
                aria-expanded={userMenuOpen}
                title="Mi cuenta"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <span style={{ width:24, height:24, borderRadius:999, background:'#0f172a', color:'#fff', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:12 }}>{user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email||'U').charAt(0).toUpperCase()}</span>
                <span style={{ fontSize:13, color:'#0f172a' }}>{user.displayName ? user.displayName.split(' ')[0] : user.email}</span>
                <span>▾</span>
              </button>

              {userMenuOpen && (
                <div style={{ position:'absolute', right:0, top:40, background:'#fff', boxShadow:'0 6px 18px rgba(2,6,23,0.12)', borderRadius:8, minWidth:180, padding:10, zIndex:1300 }}>
                  <div style={{ padding:'8px 10px', borderBottom:'1px solid #eef2f7' }}>
                    <div style={{ fontSize:14, fontWeight:700 }}>Mi Cuenta</div>
                  </div>
                  <div style={{ padding:'10px' }}>
                    <div style={{ fontWeight:600 }}>{user.displayName || user.email}</div>
                    <div style={{ color:'#64748b', fontSize:13 }}>{user.email}</div>
                  </div>
                  <button className="link-like" style={{ width:'100%', textAlign:'left', padding:'10px', borderTop:'1px solid #eef2f7', background:'transparent', border:'none', cursor:'pointer' }} onClick={async () => { await logout(); setUserMenuOpen(false); }}>Cerrar sesión</button>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => { setShowAuth(true); setAuthTab('login'); setAuthError(""); }}
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
            onClick={toggleCart}
            className="icon-btn"
            title="Abrir carrito"
            aria-label="Abrir carrito"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 8, borderRadius: 8 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45C8.89 16.37 9.5 17 10.25 17h7.45v-2H10.25l.9-1.63L20 6H7z" fill="#0f172a" />
              <circle cx="10.5" cy="20.5" r="1.5" fill="#0f172a" />
              <circle cx="18.5" cy="20.5" r="1.5" fill="#0f172a" />
            </svg>
          </button>
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
                <p className="auth-foot">¿Ya tienes cuenta? <button type="button" className="link-like" onClick={() => setAuthTab('login')}>Inicia sesión aquí</button></p>
              </form>
            ) : (
              <form className="auth-form" onSubmit={handleLogin}>
                {(localError || authErrorFromCtx) && <p style={{ color: '#b91c1c' }}>{localError || authErrorFromCtx}</p>}
                <label>Email</label>
                <input value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="tu@email.com" />
                <label>Contraseña</label>
                <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="••••••••" />
                <button className="primary" disabled={loading}>{loading ? 'Entrando...' : 'Iniciar Sesión'}</button>
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
