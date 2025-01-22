import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBdXcMUV-vRVi_XFE7TNYrgLOLuDIfVC0",
  authDomain: "instudo-pweb.firebaseapp.com",
  projectId: "instudo-pweb",
  storageBucket: "instudo-pweb.firebasestorage.app",
  messagingSenderId: "310979896327",
  appId: "1:310979896327:web:ffa1f66a4a3eb6568136a2"
};

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);