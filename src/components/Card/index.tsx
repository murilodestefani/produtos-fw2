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
  return (
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
          <CardButton href={buttonUrl}>
            <ShoppingCartSimple /> Ver Produto
          </CardButton>
          <CardButtonFavorito>
            <Heart />
          </CardButtonFavorito>
        </CardFooter>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
