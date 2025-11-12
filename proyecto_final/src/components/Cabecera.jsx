import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContex";

export default function Cabecera() {
  const { toggleCart } = useCart();

  return (
    <header className="header">
      <div className="header-content container">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <NavLink to="/seccion/inicio" className="logo">MiTienda</NavLink>
          <nav className="menu" aria-label="main" style={{ display: "flex", gap: 8 }}>
            <NavLink to="/seccion/inicio" style={({isActive})=>({ fontWeight: isActive?700:500, textDecoration:"none", color:"#222" })}>Inicio</NavLink>
            <NavLink to="/seccion/hombres" style={({isActive})=>({ fontWeight: isActive?700:500, textDecoration:"none", color:"#222" })}>Hombres</NavLink>
            <NavLink to="/seccion/mujeres" style={({isActive})=>({ fontWeight: isActive?700:500, textDecoration:"none", color:"#222" })}>Mujeres</NavLink>
            <NavLink to="/seccion/accesorios" style={({isActive})=>({ fontWeight: isActive?700:500, textDecoration:"none", color:"#222" })}>Accesorios</NavLink>
            <NavLink to="/seccion/ofertas" style={({isActive})=>({ fontWeight: isActive?700:500, textDecoration:"none", color:"#222" })}>Ofertas</NavLink>
          </nav>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="search-bar">
            <input placeholder="Buscar productos..." />
          </div>
          <button onClick={toggleCart} style={{ padding: 8, borderRadius: 8 }}>Carrito</button>
        </div>
      </div>
    </header>
  );
}
