import { useState, useEffect } from "react";
import { db } from "../../services/firebaseConnection";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";
import "./styles.css";

interface FavoritoProps {
  id: string;
  data: any;
}

export function Favoritos() {
  const [favoritos, setFavoritos] = useState<FavoritoProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookmarks"));
        const fetchedFavoritos: FavoritoProps[] = [];
        querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
          fetchedFavoritos.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setFavoritos(fetchedFavoritos);
        console.log("Favoritos:", fetchedFavoritos);
      } catch (error) {
        console.error("Erro ao buscar documentos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bannerFavoritos">
        <h1>Favoritos</h1>
      </div>
      <main>
        <section className="favoritos">
          {favoritos.map((favorito) => (
            <div key={favorito.id}>
              <h4>ID: {favorito.id}</h4>
              <pre>{JSON.stringify(favorito.data, null, 2)}</pre>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Favoritos;
