import "./styles.css";
import produto from "../../assets/images/produto.jpg";
import Card from "../../components/Card";

export function Home() {
  const cardData = {
    imageUrl: produto,
    title: "Nome do Produto",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "2",
    buttonUrl: "#",
  };

  return (
    <>
      <div className="banner">
        <h1>Nossa Vitrine</h1>
      </div>
      <main>
        <section className="vitrine">
          <Card {...cardData} />
          <Card {...cardData} />
          <Card {...cardData} />
        </section>
      </main>
    </>
  );
}
