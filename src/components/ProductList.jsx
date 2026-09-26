import React from 'react';

export function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      <h2>Catálogo de Productos</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <div className="prices">
              <span className="price-normal">${product.price.toLocaleString('es-CL')}</span>
              <span className="price-offer">${product.offerPrice.toLocaleString('es-CL')}</span>
            </div>
            <button onClick={() => onAddToCart(product)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}