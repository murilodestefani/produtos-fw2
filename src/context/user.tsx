import { ReactNode, createContext, useState } from 'react';

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
  const [name, setName] = useState('Murilo');
  const [email, setEmail] = useState('murilo@email.com');
  const [password, setPassword] = useState('123123');

  function updateUser(name: string, email: string, password: string) {
    setName(name);
    setEmail(email);
    setPassword(password);
  }

  return (
    <UserContext.Provider
      value={{
        name,
        email,
        password,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
