import { CartContext, CartProvider } from '../../context/cart';
import { Cart } from '../../components/Cart';
import { useContext } from 'react';
import './styles.css';

export function Carrinho() {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);

  return (
    <CartProvider>
      <main>
        <section className="carrinho">
          <Cart />
        </section>
      </main>
    </CartProvider>
  );
}
