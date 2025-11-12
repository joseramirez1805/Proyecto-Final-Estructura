import React from "react";

export default function CartItem({ item, onRemove, onDecrement }) {
  const { product, qty } = item;
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <div className="meta">
        <p>{product.name}</p>
        <small>{product.category}</small>
        <div>${product.price.toFixed(2)} x {qty}</div>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:8, alignItems:'flex-end'}}>
        <button className="remove-btn" onClick={() => onRemove(item.id)}>🗑</button>
        <div style={{display:'flex',gap:6}}>
          <button onClick={() => onDecrement(item.id)} style={{padding:'4px 8px',borderRadius:6}}> - </button>
          <span style={{alignSelf:'center'}}>{qty}</span>
          <button onClick={() => onRemove(item.id) } style={{padding:'4px 8px',borderRadius:6}}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}
