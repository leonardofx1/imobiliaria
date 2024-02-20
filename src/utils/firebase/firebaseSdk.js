
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "imobiliariairece-6bc48.firebaseapp.com",
  projectId: "imobiliariairece-6bc48",
  storageBucket: "imobiliariairece-6bc48.appspot.com",
  messagingSenderId: "657359340393",
  appId: "1:657359340393:web:adda15f220c2a7cbafb3f8"
};


const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const storage = getStorage(app);
