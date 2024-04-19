import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages/Home';
import { Produto } from './pages/Produto';
import { Produtos } from './pages/Produtos';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Private } from './routes/Private';
import { Favoritos } from './pages/Favoritos';
import { Usuario } from './pages/Usuario';
import { Carrinho } from './pages/Carrinho';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/produtos/:id',
        element: (
          <Private>
            <Produto />
          </Private>
        ),
      },
      {
        path: '/produtos',
        element: <Produtos />,
      },
      {
        path: '/favoritos',
        element: <Favoritos />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/usuario',
        element: <Usuario />,
      },
      {
        path: '/carrinho',
        element: <Carrinho />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
