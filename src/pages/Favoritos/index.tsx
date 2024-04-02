import { collection, onSnapshot, query } from 'firebase/firestore';
import './styles.css';
import { db } from '../../services/firebaseConnection';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';

interface FavoritoProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  bookmarkedAt: string;
}

export function Favoritos() {
  const bookmarksCollection = collection(db, 'bookmarks');
  const queryRef = query(bookmarksCollection);
  const [favoritos, setFavoritos] = useState<FavoritoProps[]>([]);

  useEffect(() => {
    function getFavoritos() {
      onSnapshot(queryRef, (snapshot) => {
        const lista = [] as FavoritoProps[];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            imageUrl: doc.data().imageUrl,
            title: doc.data().title,
            description: doc.data().description,
            price: doc.data().price,
            bookmarkedAt: doc.data().bookmarkedAt.toDate().toLocaleString(),
          });
        });

        setFavoritos(lista);
      });
    }
    getFavoritos();
  }, [queryRef]);

  return (
    <>
      <div className="bannerFavoritos">
        <h1>Favoritos</h1>
      </div>
      <main>
        <div className="favoritosList">
          {favoritos.map((favorito, index) => (
            <div key={index}>
              <Card
                imageUrl={favorito.imageUrl}
                title={favorito.title}
                price={favorito.price}
                description={favorito.description}
                buttonUrl="/favoritos"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Favoritos;
