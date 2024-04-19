import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { CartContext } from '../../context/cart';
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
  CardButtonVerProduto,
} from '../styled-components/Card/styles';
import { Eye, Heart, ShoppingCartSimple } from '@phosphor-icons/react';
import { useContext } from 'react';

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
  const { addItemCart } = useContext(CartContext);

  function handleAddToCart() {
    const newItem = {
      img: imageUrl,
      title: title,
      price: price,
    };
    addItemCart(newItem);
  }

  function handleBookmark() {
    addDoc(collection(db, 'bookmarks'), {
      imageUrl: imageUrl,
      title: title,
      description: description,
      price: price,
      bookmarkedAt: new Date(),
    })
      .then(() => {
        alert('Adicionado aos Favoritos!');
      })
      .catch((error) => {
        alert(`Erro ao favoritar: ${error}`);
      });
  }

  return (
    <CardContainer>
      <CardImage>
        <CardButtonFavorito onClick={handleBookmark}>
          <Heart weight="bold" />
        </CardButtonFavorito>
        <CardPhoto src={imageUrl} />
      </CardImage>
      <CardBody>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardPrice>${price} BRL</CardPrice>
        </CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardFooter>
          <CardButton onClick={handleAddToCart}>
            <ShoppingCartSimple weight="bold" /> Comprar
          </CardButton>
          <CardButtonVerProduto as="a" href={buttonUrl}>
            <Eye size={22} weight="bold" />
          </CardButtonVerProduto>
        </CardFooter>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
