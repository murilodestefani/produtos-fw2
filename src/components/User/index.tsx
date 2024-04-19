import { useContext, useState } from 'react';
import { UserContext } from '../../context/user';

export default function User() {
  const { name, email, password, updateUser } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <div>
      <h1>User</h1>
      <p>Nome: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>

      <input
        type="text"
        placeholder="nome do usuário"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email@exemplo.com"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="********"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button onClick={() => updateUser(userName, userEmail, userPassword)}>
        Atualizar Usuário
      </button>
    </div>
  );
}
