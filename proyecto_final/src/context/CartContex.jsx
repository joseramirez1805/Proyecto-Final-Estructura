import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

/*
  Carrito global:
  - cart: array de { id, qty, product }
  - addToCart(product) => si existe id incrementa qty, sino push
  - removeFromCart(productId) => elimina
  - clearCart()
  - total
  - isOpen, setIsOpen para controlar drawer
*/

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // {id, qty, product}
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { id: product.id, qty: 1, product }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const decrementQty = (id) => {
    setCart(prev => prev.flatMap(item => {
      if (item.id !== id) return item;
      if (item.qty > 1) return { ...item, qty: item.qty - 1 };
      return []; // remove if qty reaches 0
    }));
  };

  const clearCart = () => setCart([]);
  const total = cart.reduce((s, it) => s + it.product.price * it.qty, 0);

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, decrementQty, clearCart, total, isOpen, setIsOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};
