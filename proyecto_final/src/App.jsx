import React from "react";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";

export default function App() {
  return (
    <CartProvider>
      <Index />
    </CartProvider>
  );
}
