import { Link } from "react-router-dom";
import error404 from "../../assets/images/404.png";
import "./styles.css";

export function NotFound() {
  return (
    <section className="error">
      <img src={error404} />
      <h1>404 Error</h1>
      <h2>Desculpe, página não encontrada</h2>
      <p>
        O link que você acessou provavelmente está quebrado ou a página foi
        removida.
      </p>
      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </section>
  );
}
