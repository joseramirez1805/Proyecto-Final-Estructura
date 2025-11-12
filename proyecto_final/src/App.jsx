import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContex";
import Seccion from "./pages/Seccion";
import CajonCarrito from "./components/CajonCarrito";

export default function App() {
  return (
    <CartProvider>
      <CajonCarrito />
      <Routes>
        <Route path="/" element={<Navigate to="/seccion/inicio" replace />} />
        <Route path="/seccion/:section" element={<Seccion />} />
      </Routes>
    </CartProvider>
  );
}
