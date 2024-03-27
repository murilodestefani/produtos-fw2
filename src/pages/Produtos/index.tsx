import { useState, useEffect } from "react";
import Card from "../../components/Card";
import "./styles.css";

interface ProdutoProps {
  id: string;
  thumbnail: string;
  title: string;
  price: string;
  description: string;
}

export function Produtos() {
  const [produtos, setProdutos] = useState<ProdutoProps[]>([]);

  useEffect(() => {
    function getProducts() {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          setProdutos(data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getProducts();
  }, []);

  return (
    <>
      <div className="banner">
        <h1>Produtos</h1>
      </div>
      <main>
        <div className="produtosList">
          {produtos.map((produto, index) => (
            <div key={index}>
              <Card
                imageUrl={produto.thumbnail}
                title={produto.title}
                price={produto.price}
                description={produto.description}
                buttonUrl={`/produtos/${produto.id}`}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
