import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { auth } from "../services/firebaseConnection";
import { Navigate } from "react-router-dom";
import "./styles.css"

interface PrivateProps {
  children: ReactNode;
}

export function Private({ children }: PrivateProps): JSX.Element {
  const [signed, setSigned] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user?.uid,
          email: user?.email,
        };

        localStorage.setItem("@userData", JSON.stringify(userData));

        setLoading(false);
        setSigned(true);
      } else {
        setLoading(false);
        setSigned(false);
      }
    });

    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    return (
      <main className="carregando">
        <span>Carregando...</span>
      </main>
    );
  }

  if (signed === false) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
