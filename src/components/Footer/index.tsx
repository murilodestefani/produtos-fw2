import {
  FacebookLogo,
  GithubLogo,
  Heart,
  InstagramLogo,
  Package,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import './style.css';
import { UserContext } from '../../context/user';
import { useContext } from 'react';

export function Footer() {
  const { name } = useContext(UserContext);

  return (
    <footer>
      <h2>{name}</h2>
      <Link to="/" className="logo">
        <Package weight="fill" className="icon" />
        <span>Produtos</span>
      </Link>
      <div className="social">
        <a href="#" target="_blank">
          <GithubLogo weight="fill" />
        </a>
        <a href="#" target="_blank">
          <InstagramLogo weight="fill" />
        </a>
        <a href="#" target="_blank">
          <FacebookLogo weight="fill" />
        </a>
      </div>
      <div className="dev">
        <span>Made with</span>
        <Heart weight="fill" className="heart" />
        <span>
          by <a href="#">@murilodestefani</a>
        </span>
      </div>
    </footer>
  );
}
