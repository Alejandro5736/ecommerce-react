import { useState } from 'react';
import { productsData } from './data/products';
import { ProductList } from './components/ProductList';
import { ShoppingCart } from './components/ShoppingCart';
import { CartTotal } from './components/CartTotal';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para eliminar un producto del carrito según su índice
  const handleRemoveFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="app-container">
      <h1>Mi eCommerce React</h1>
      <div className="main-content">
        <section className="catalog-section">
          <ProductList products={productsData} onAddToCart={handleAddToCart} />
        </section>
        <aside className="cart-section">
          <ShoppingCart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
          <CartTotal cart={cart} />
        </aside>
      </div>
    </div>
  );
}

export default App;