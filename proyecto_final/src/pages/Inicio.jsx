import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Zapatillas Adidas',
    image: 'https://images.unsplash.com/photo-1616592455638-33d9c7d1c9e0?auto=format&fit=crop&w=400&q=80',
    discount: 25,
  },
  {
    id: 2,
    name: 'Chaqueta Negra',
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=400&q=80',
    isNew: true,
  },
  {
    id: 3,
    name: 'Reloj Azul',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
    discount: 25,
  },
  {
    id: 4,
    name: 'Mochila urbana',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    isNew: true,
  },
];

export default function Inicio() {
  const [cartCount, setCartCount] = useState(3);

  return (
    <>
      <header className="header">
        <div className="container header-content">
          <div className="logo">SHOP</div>
          <nav className="menu">
            <a href="#">Inicio</a>
            <a href="#">Hombres</a>
            <a href="#">Mujeres</a>
            <a href="#">Accesorios</a>
            <a href="#">Ofertas</a>
          </nav>
          <div className="search-bar">
            <input type="search" placeholder="Buscar productos..." />
          </div>
          <div className="icons">
            <button aria-label="Usuario" className="icon-button">👤</button>
            <button aria-label="Favoritos" className="icon-button">♡</button>
            <button aria-label="Carrito" className="icon-button cart-icon">
              🛒
              <div className="cart-count">{cartCount}</div>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="banner-section">
          <div className="banner-text">
            <small>NUEVA COLECCIÓN</small>
            <h1>Estilo que te define</h1>
            <p>Descubre las últimas tendencias en moda. Calidad premium, diseños exclusivos y envío gratuito en compras superiores a $50.</p>
            <div className="buttons-group">
              <button className="btn primary">Comprar Ahora</button>
              <button className="btn secondary"></button>
            </div>
          </div>
        </section>

        <section className="products-section">
          <div className="container">
            <h2>Productos Destacados</h2>
            <p className="subtitle">Descubre nuestra selección cuidadosamente elegida de los mejores productos</p>
            <div className="product-grid">
              {products.map(({ id, name, image, discount, isNew }) => (
                <div key={id} className="product-card">
                  {discount && <div className="badge discount">-{discount}%</div>}
                  {isNew && <div className="badge new">Nuevo</div>}
                  <img src={image} alt={name} />
                  <button className="favorite-btn" aria-label="Agregar a favoritos">♡</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
