import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner(){
  const navigate = useNavigate();

  const goHome = () => navigate('/seccion/inicio');
  const goOffers = () => navigate('/seccion/ofertas');

  return (
    <section className="banner-section">
      <div className="banner-text container">
        <small>NUEVA COLECCIÓN</small>
        <h1>Estilo que te define</h1>
        <p>Descubre las últimas tendencias en moda. Calidad premium, diseños exclusivos y envío gratuito en compras superiores a $50.</p>
        <div style={{display:'flex',gap:12, marginTop:16}}>
          <button onClick={goHome} className="banner-cta">Comprar Ahora</button>
          <button onClick={goOffers} className="banner-cta-secondary">Ofertas Especiales</button>
        </div>
      </div>
    </section>
  );
}
