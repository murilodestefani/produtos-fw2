import { ReactNode, createContext, useState } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  img: string;
  title: string;
  price: string;

  addItemCart: (newItem: CartContextData) => void;
  removeItemCart: (newItem: CartContextData) => void;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItem, setCartItem] = useState<CartContextData[]>();

  function addItemCart(newItem: CartContextData) {
    setCartItem((prevCartItem) => [...prevCartItem, newItem]);
  }

  function removeItemCart(itemToRemove: CartContextData) {
    setCartItem((prevCartItem) =>
      prevCartItem.filter((item) => item !== itemToRemove)
    );
  }

  return (
    <CartContext.Provider value={{ cartItem, addItemCart, removeItemCart }}>
      {children}
    </CartContext.Provider>
  );
}
