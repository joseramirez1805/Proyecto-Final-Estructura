import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContex";
import Seccion from "./pages/Seccion";
import CajonCarrito from "./components/CajonCarrito";
import { FavoritesProvider } from "./context/FavoritesContext";
import CajonFavoritos from "./components/CajonFavoritos";
import HelpBot from "./components/HelpBot"; // <- agregado

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

        <HelpBot /> {/* aparece en todas las páginas */}
      </CartProvider>
    </FavoritesProvider>
  );
}
