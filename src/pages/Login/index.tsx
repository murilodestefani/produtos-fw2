import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebaseConnection';
import './styles.css';
import userImg from '../../assets/images/user.png';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert(`Logado com sucesso!`);
        navigate('/produtos', { replace: true });
      })
      .catch((error) => {
        alert(`Erro ao fazer login\n\nErro:${error}`);
        console.log(error);
      });
  }

  return (
    <main>
      <section className="login">
        <form className="formLogin" onSubmit={handleSubmit}>
          <img src={userImg} alt="" />
          <input
            type="email"
            placeholder="email@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </section>
    </main>
  );
}
