import React from "react";

export default function Banner(){
  return (
    <section className="banner-section">
      <div className="banner-text container">
        <small>NUEVA COLECCIÓN</small>
        <h1>Estilo que te define</h1>
        <p>Descubre las últimas tendencias en moda. Calidad premium, diseños exclusivos y envío gratuito en compras superiores a $50.</p>
        <div style={{display:'flex',gap:12, marginTop:16}}>
          <button style={{padding:'8px 16px', borderRadius:8, border:'none', background:'#fff'}}>Comprar Ahora</button>
          <button style={{padding:'8px 16px', borderRadius:8, border:'none', background:'rgba(255,255,255,0.85)'}}> </button>
        </div>
      </div>
    </section>
  );
}
