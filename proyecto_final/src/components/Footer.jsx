import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div className={styles.container}>
          <h3>Suscríbete a nuestro Newsletter</h3>
          <p>Recibe ofertas exclusivas y las últimas novedades directamente en tu correo</p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Tu correo electrónico" aria-label="Email" />
            <button className={styles.subscribe}>Suscribirse</button>
          </form>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.col}>
            <h4>SHOP</h4>
            <p>Tu destino para la moda moderna. Calidad premium, diseños exclusivos y un servicio excepcional.</p>
            <div className={styles.socials}>
              <a aria-label="facebook" href="#">f</a>
              <a aria-label="instagram" href="#">ig</a>
              <a aria-label="twitter" href="#">t</a>
              <a aria-label="youtube" href="#">yt</a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Tienda</h4>
            <ul>
              <li><Link to="/seccion/inicio">Nueva Colección</Link></li>
              <li><Link to="/seccion/mujeres">Ropa de Mujer</Link></li>
              <li><Link to="/seccion/hombres">Ropa de Hombre</Link></li>
              <li><Link to="/seccion/accesorios">Accesorios</Link></li>
              <li><Link to="/seccion/ofertas">Ofertas Especiales</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Atención al Cliente</h4>
            <ul>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/preguntas">Preguntas Frecuentes</Link></li>
              <li><Link to="/envios">Envíos y Devoluciones</Link></li>
              <li><Link to="/guia-tallas">Guía de Tallas</Link></li>
              <li><Link to="/seguimiento">Seguimiento de Pedido</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Información Legal</h4>
            <ul>
              <li><Link to="/terminos">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad">Política de Privacidad</Link></li>
              <li><Link to="/cookies">Política de Cookies</Link></li>
              <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.container}>
          <div>© {new Date().getFullYear()} SHOP. Todos los derechos reservados.</div>
          <div className={styles.bottomLinks}>
            <Link to="/privacidad">Política de Privacidad</Link>
            <Link to="/terminos">Términos de Servicio</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
