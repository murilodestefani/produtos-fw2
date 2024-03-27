import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import "./styles.css";

interface ProdutoProps {
  id: string;
  thumbnail: string;
  title: string;
  price: string;
  description: string;
}

export function Produto() {
  const [produto, setProduto] = useState<ProdutoProps | null>(null);
  const { id } = useParams<string>();

  useEffect(() => {
    function getProduct() {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduto(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getProduct();
  }, [id]);

  return (
    <>
      <div className="banner">
        <h1>Produto</h1>
      </div>
      <main>
        <section className="produto">
          {produto && (
            <Card
              imageUrl={produto.thumbnail}
              title={produto.title}
              price={produto.price}
              description={produto.description}
              buttonUrl={`/produtos/${produto.id}`}
            />
          )}
        </section>
      </main>
    </>
  );
}
