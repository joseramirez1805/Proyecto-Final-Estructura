import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CardItem from "../components/CardItem";
import Cart from "../components/Cart";
import { products } from "../data/products";
import "../index.css";

export default function Index() {
  return (
    <>
      <Header />

      <main>
        <Banner />

        <section className="main container">
          <h1>Moda para Hombres</h1>
          <p className="subtitle">Encuentra el estilo perfecto para cada ocasión</p>

          <div className="filters">
            <button className="active">Todos</button>
            <button>Camisetas</button>
            <button>Pantalones</button>
            <button>Zapatos</button>
            <button>Chaquetas</button>
          </div>

          <div className="product-grid">
            {products.map(p => (
              <CardItem key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>

      <Cart />
    </>
  );
}
