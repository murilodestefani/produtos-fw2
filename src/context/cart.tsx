import { ReactNode, createContext, useEffect, useState } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

interface CartItem {
  img: string;
  title: string;
  price: string;
}

interface CartContextData {
  cartItems: CartItem[];

  addItemCart: (newItem: CartItem) => void;
  removeItemCart: (itemToRemove: CartItem) => void;
  totalItems: number;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const localStorageKey = 'cartItems';
  const savedCartItems = localStorage.getItem(localStorageKey);
  const initialCartItems: CartItem[] = savedCartItems
    ? JSON.parse(savedCartItems)
    : [];

  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(cartItems));
  }, [cartItems]);

  function addItemCart(newItem: CartItem) {
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  }

  function removeItemCart(itemToRemove: CartItem) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.title !== itemToRemove.title)
    );
  }

  function calculateTotalItems() {
    return cartItems.length;
  }

  const totalItems = calculateTotalItems();

  return (
    <CartContext.Provider value={{ cartItems, addItemCart, removeItemCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}
