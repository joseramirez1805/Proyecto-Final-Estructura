import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContex";
import Section from "./pages/Section";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  return (
    <CartProvider>
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Navigate to="/seccion/inicio" replace />} />
        <Route path="/seccion/:section" element={<Section />} />
      </Routes>
    </CartProvider>
  );
}
