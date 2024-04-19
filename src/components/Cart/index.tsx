import { useContext } from 'react';
import { CartContext } from '../../context/cart.tsx';

export function Cart() {
  const { cartItems, addItemCart, removeItemCart } = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      <span>{JSON.stringify(cartItems)}</span>
    </>
  );
}
