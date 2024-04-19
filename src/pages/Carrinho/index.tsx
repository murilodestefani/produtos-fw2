import { CartProvider } from '../../context/cart';
import { Cart } from '../../components/Cart';

export function Carrinho() {
  return (
    <CartProvider>
      <h1>Carrinho</h1>
      <Cart />
    </CartProvider>
  );
}
