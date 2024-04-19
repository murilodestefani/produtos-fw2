import { Package, ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import './styles.css';
import { UserContext } from '../../context/user';
import { useContext } from 'react';

export function Header() {
  const { name, email } = useContext(UserContext);

  return (
    <header>
      <Link to="/" className="logo">
        <Package weight="fill" className="icon" />
        <span>Produtos</span>
      </Link>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/produtos" className="link">
          Produtos
        </Link>
        <Link to="/favoritos" className="link">
          Favoritos
        </Link>
      </nav>
      <Link to="/usuario" className="actions">
        <section className="user">
          <p>
            <strong>Olá, {name} 👋</strong>
          </p>
          <p>{email}</p>
        </section>
        <Link to="/carrinho">
          <button>
            <ShoppingCart weight="fill" />
          </button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </Link>
    </header>
  );
}
