import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContex";
import Seccion from "./pages/Seccion";
import CajonCarrito from "./components/CajonCarrito";
import { FavoritesProvider } from "./context/FavoritesContext"; // <- agregado
import CajonFavoritos from "./components/CajonFavoritos"; // <- agregado

export default function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <CajonCarrito />
        <CajonFavoritos />
        <Routes>
          <Route path="/" element={<Navigate to="/seccion/inicio" replace />} />
          <Route path="/seccion/:section" element={<Seccion />} />
        </Routes>
      </CartProvider>
    </FavoritesProvider>
  );
}
