import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import {
  CardContainer,
  CardImage,
  CardPhoto,
  CardBody,
  CardHeader,
  CardTitle,
  CardPrice,
  CardDescription,
  CardFooter,
  CardButton,
  CardButtonFavorito,
} from "../styled-components/Card/styles";
import { Heart, ShoppingCartSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  buttonUrl: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  price,
  buttonUrl,
}) => {
  function handleBookmark() {
    addDoc(collection(db, "bookmarks"), {
      Produto: title,
      bookmarkedAt: new Date(),
    })
      .then(() => {
        alert("Favoritado com sucesso!");
      })
      .catch((error) => {
        alert(`Erro ao favoritar: ${error}`);
      });
  }

  return (
    <Link className="linkCard" to={buttonUrl}>
      <CardContainer>
        <CardImage>
          <CardPhoto src={imageUrl} />
        </CardImage>
        <CardBody>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardPrice>${price} BRL</CardPrice>
          </CardHeader>
          <CardDescription>{description}</CardDescription>
          <CardFooter>
            <CardButton as="a" href={buttonUrl}>
              <ShoppingCartSimple /> Ver Produto
            </CardButton>
            <CardButtonFavorito onClick={handleBookmark}>
              <Heart weight="fill" />
            </CardButtonFavorito>
          </CardFooter>
        </CardBody>
      </CardContainer>
    </Link>
  );
};

export default Card;
