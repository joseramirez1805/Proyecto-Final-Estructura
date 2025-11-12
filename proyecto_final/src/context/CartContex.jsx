import React, { createContext, useContext, useRef, useState } from "react";
import Queue from "../utils/cola";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const queueRef = useRef(new Queue());
  const [cart, setCart] = useState(queueRef.current.toArray());
  const [open, setOpen] = useState(false);

  const addToCart = (item) => {
    queueRef.current.enqueue(item);
    setCart(queueRef.current.toArray());
    setOpen(true);
  };

  const decreaseQty = (id) => {
    queueRef.current.decrease(id);
    setCart(queueRef.current.toArray());
  };

  const removeFromCart = (id) => {
    queueRef.current.remove(id);
    setCart(queueRef.current.toArray());
  };

  const clearCart = () => {
    queueRef.current.clear();
    setCart([]);
  };

  const toggleCart = () => setOpen((v) => !v);
  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQty,
        removeFromCart,
        clearCart,
        open,
        toggleCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
export default CartProvider;
