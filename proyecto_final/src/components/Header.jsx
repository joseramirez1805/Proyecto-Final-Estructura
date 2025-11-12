import React from "react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart, setIsOpen } = useCart();

  return (
    <header className="header">
      <div className="container header-content">
        <div style={{display:"flex",alignItems:"center",gap:18}}>
          <div className="logo">SHOP</div>
          <nav className="menu">
            <a href="#">Inicio</a>
            <a href="#">Hombres</a>
            <a href="#">Mujeres</a>
            <a href="#">Accesorios</a>
            <a href="#">Ofertas</a>
          </nav>
        </div>

        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div className="search-bar"><input type="search" placeholder="Buscar productos..." /></div>
          <div style={{display:"flex",gap:10, alignItems:"center"}}>
            <button aria-label="Usuario" className="icon-button">👤</button>
            <button aria-label="Favoritos" className="icon-button">♡</button>
            <button aria-label="Carrito" className="icon-button" onClick={() => setIsOpen(true)}>
              🛒
              {cart.length>0 && <span style={{
                marginLeft:8,
                background:'#0b0b1d', color:'#fff', borderRadius:12, padding:'2px 8px', fontSize:12
              }}>{cart.reduce((s,i)=>s+i.qty,0)}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
