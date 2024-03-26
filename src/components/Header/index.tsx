import { Package } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Header() {
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
        <Link to="/" className="link">
          Catálogo
        </Link>
        <Link to="/" className="link">
          Favoritos
        </Link>
      </nav>
      <Link to="/">
        <button>Login</button>
      </Link>
    </header>
  );
}
