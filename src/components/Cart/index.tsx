import {
  CartContainer,
  CartImage,
  CartBody,
  CartTitle,
  CartPrice,
  CartButtonRemove,
} from '../styled-components/Cart/styles';
import { Trash } from '@phosphor-icons/react';
import { CartContext } from '../../context/cart.tsx';
import { useContext } from 'react';
import './styles.css';

interface CartItem {
  img: string;
  title: string;
  price: string;
}

export function Cart() {
  const { cartItems, removeItemCart, totalItems } = useContext(CartContext);

  function handleRemoveItem(item: CartItem) {
    removeItemCart(item);
  }

  return (
    <>
      <div className="itemsCarrinho">
        {cartItems.map((item, index) => (
          <CartContainer key={index}>
            <CartImage src={item.img} />
            <CartBody>
              <CartTitle>{item.title}</CartTitle>
              <CartPrice>$ {item.price}</CartPrice>
            </CartBody>
            <CartButtonRemove onClick={() => handleRemoveItem(item)}>
              <Trash size={16} weight="fill" />
            </CartButtonRemove>
          </CartContainer>
        ))}
      </div>
      <h6 className='totalItems'>Total de Itens: {totalItems}</h6>
    </>
  );
}

export default Cart;
