// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI-Jfy_CJYHyiZpAJbPDqni4Xl0rsprDk",
  authDomain: "manga-shop-bf1d4.firebaseapp.com",
  projectId: "manga-shop-bf1d4",
  storageBucket: "manga-shop-bf1d4.firebasestorage.app",
  messagingSenderId: "971273648203",
  appId: "1:971273648203:web:985fdf4afa6e42fa2cb5ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);