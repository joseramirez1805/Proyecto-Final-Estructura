import React from "react";
import { CartProvider } from "./context/CartContex";
import Index from "./pages/Index";

export default function App() {
  return (
    <CartProvider>
      <Index />
    </CartProvider>
  );
}
