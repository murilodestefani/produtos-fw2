import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdSIO5_J4jP92JfTuORrKeohkrS0t-mIo",
  authDomain: "produtos-fw2.firebaseapp.com",
  projectId: "produtos-fw2",
  storageBucket: "produtos-fw2.appspot.com",
  messagingSenderId: "30638729439",
  appId: "1:30638729439:web:d0d5870d52cd444860616a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
