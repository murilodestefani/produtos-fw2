import { useContext } from 'react';
import { CartContext } from '../../context/cart.tsx';
import './styles.css';
import {
  CartContainer,
  CartImage,
  CartBody,
  CartTitle,
  CartPrice,
  CartButtonRemove,
} from '../styled-components/Cart/styles';
import { Trash } from '@phosphor-icons/react';

interface CartProps {
  img: string;
  title: string;
  price: string;
}

export function Cart() {
  const { cartItems, addItemCart, removeItemCart } = useContext(CartContext);

  return (
    <CartContainer>
      <CartImage src="https://source.unsplash.com/random/?product" />
      <CartBody>
        <CartTitle>Lorem ipsum dolor sit amet consectetur</CartTitle>
        <CartPrice>$ 99.60</CartPrice>
      </CartBody>
      <CartButtonRemove>
        <Trash size={16} weight="fill" />
      </CartButtonRemove>
    </CartContainer>
  );
}

export default Cart;
