import { useContext, useState } from 'react';
import { UserContext } from '../../context/user';
import './styles.css';

export default function User() {
  const { name, email, password, updateUser } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <form className="formUser">
      <input
        type="text"
        placeholder={name}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder={email}
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder={password}
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button onClick={() => updateUser(userName, userEmail, userPassword)}>
        Atualizar Usuário
      </button>
    </form>
  );
}
