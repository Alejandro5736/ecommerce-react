import React from 'react';

export function ShoppingCart({ cart, onRemoveFromCart }) {
  return (
    <div className="shopping-cart">
      <h2>Carrito de Compras</h2>
      <p className="cart-count">
        <strong>Total de ítems:</strong> {cart.length}
      </p>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div>
                <strong>{item.name}</strong> - ${item.offerPrice.toLocaleString('es-CL')}
              </div>
              <button 
                className="btn-remove" 
                onClick={() => onRemoveFromCart(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}