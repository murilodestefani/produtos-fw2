import User from '../../components/User';
import { UserProvider } from '../../context/user';
import './styles.css';

export function Usuario() {
  return (
    <UserProvider>
      <main>
        <section className="carrinho">
          <User />
        </section>
      </main>
    </UserProvider>
  );
}
