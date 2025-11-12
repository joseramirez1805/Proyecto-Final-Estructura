import React from "react";
import { useCart } from "../context/CartContex";
import CartItem from "./CartItem";

export default function Cart(){
  const { cart, removeFromCart, decrementQty, clearCart, total, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;
  return (
    <aside className="cart-drawer" aria-label="Carrito">
      <div className="cart-header">
        <h3>Carrito de Compras</h3>
        <button onClick={() => setIsOpen(false)}>✖</button>
      </div>

      <p className="queue-info"><strong>Cola (Queue - FIFO):</strong> Los productos se procesan en orden de llegada</p>

      {cart.length === 0 ? (
        <p style={{marginTop:18}}>Tu carrito está vacío</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
              onDecrement={decrementQty}
            />
          ))}

          <div className="cart-total">
            <div>Total:</div>
            <div>${total.toFixed(2)}</div>
          </div>

          <button className="process-btn" onClick={() => { alert("Compra procesada (demo)"); clearCart(); setIsOpen(false); }}>
            Procesar Compra
          </button>

          <button className="clear-btn" onClick={clearCart}>Vaciar Carrito</button>
        </>
      )}
    </aside>
  );
}
