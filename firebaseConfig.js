import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDlcKjGxpgomCi9frdPOtGPFqjAqZUykUg",
  authDomain: "aula8-b3871.firebaseapp.com",
  databaseURL: "https://aula8-b3871-default-rtdb.firebaseio.com",
  projectId: "aula8-b3871",
  storageBucket: "aula8-b3871.firebasestorage.app",
  messagingSenderId: "220440658507",
  appId: "1:220440658507:web:eb5a4feae2a73f335703ce"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // Exportando a instância do banco