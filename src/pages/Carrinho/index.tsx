import { CartProvider } from '../../context/cart';
import { Cart } from '../../components/Cart';

export function Carrinho() {
  return (
    <CartProvider>
      <main>
        <Cart />
      </main>
    </CartProvider>
  );
}
