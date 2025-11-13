import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="newsletter">
          <h3>Suscríbete a nuestro Newsletter</h3>
          <p>Recibe ofertas exclusivas y las últimas novedades directamente en tu correo</p>
          <form className="newsletter-form" onSubmit={(e)=>e.preventDefault()}>
            <input aria-label="correo" type="email" placeholder="Tu correo electrónico" />
            <button type="submit">Suscribirse</button>
          </form>
        </div>

        <div className="footer-links">
          <div className="col">
            <h4>SHOP</h4>
            <p>Tu destino para la moda moderna. Calidad premium, diseños exclusivos y un servicio excepcional.</p>
            <div className="socials">
              <a aria-label="facebook"><FaFacebookF /></a>
              <a aria-label="instagram"><FaInstagram /></a>
              <a aria-label="twitter"><FaTwitter /></a>
              <a aria-label="youtube"><FaYoutube /></a>
            </div>
          </div>

          <div className="col">
            <h4>Tienda</h4>
            <ul>
              <li>Nueva Colección</li>
              <li>Ropa de Mujer</li>
              <li>Ropa de Hombre</li>
              <li>Accesorios</li>
              <li>Ofertas Especiales</li>
            </ul>
          </div>

          <div className="col">
            <h4>Atención al Cliente</h4>
            <ul>
              <li>Contacto</li>
              <li>Preguntas Frecuentes</li>
              <li>Envíos y Devoluciones</li>
              <li>Guía de Tallas</li>
            </ul>
          </div>

          <div className="col">
            <h4>Información Legal</h4>
            <ul>
              <li>Términos y Condiciones</li>
              <li>Política de Privacidad</li>
              <li>Política de Cookies</li>
              <li>Sobre Nosotros</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <small>© {new Date().getFullYear()} SHOP. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
}
