import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/Home";
import { Produto } from "./pages/Produto";
import { Produtos } from "./pages/Produtos";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produtos/:id",
        element: <Produto/>,
      },
      {
        path: "/produtos",
        element: <Produtos />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
