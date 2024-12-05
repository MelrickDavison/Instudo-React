import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXcjBsTFwBRuVLhHJPEUcmDn7RCLFElW8",
  authDomain: "to-do-69b2a.firebaseapp.com",
  projectId: "to-do-69b2a",
  storageBucket: "to-do-69b2a.firebasestorage.app",
  messagingSenderId: "156010613165",
  appId: "1:156010613165:web:6aee5000137dc54a773924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);