import React from 'react';

export function CartTotal({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.offerPrice, 0);

  return (
    <div className="cart-total">
      <h3>Total a pagar: ${total.toLocaleString('es-CL')}</h3>
    </div>
  );
}