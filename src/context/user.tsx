import { ReactNode, createContext, useEffect, useState } from 'react';

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  name: string;
  email: string;
  password: string;

  updateUser: (name: string, email: string, password: string) => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const localStorageKey = 'userData';
  const savedUserData = localStorage.getItem(localStorageKey);
  const initialUserData = savedUserData
    ? JSON.parse(savedUserData)
    : {
        name: 'Convidado',
        email: 'convidado@email.com',
        password: 'convidado123',
      };
  const [userData, setUserData] = useState(initialUserData);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(userData));
  }, [userData]);

  function updateUser(name: string, email: string, password: string) {
    setUserData({ name, email, password });
  }

  return (
    <UserContext.Provider
      value={{
        name: userData.name,
        email: userData.email,
        password: userData.password,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
