import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { UserProvider } from '../../context/user';

export function Layout() {
  return (
    <>
      <UserProvider>
        <Header />
      </UserProvider>
      <Outlet />
      <Footer />
    </>
  );
}
