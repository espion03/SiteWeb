// Import the functions you need from the SDKs you need

/* eslint-disable */

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsUU8bgqkFvfLZYQlTG4sgg4H5E06C5Dg",
  authDomain: "prise-en-main-f6d86.firebaseapp.com",
  projectId: "prise-en-main-f6d86",
  storageBucket: "prise-en-main-f6d86.appspot.com",
  messagingSenderId: "152742437276",
  appId: "1:152742437276:web:0ab1375e5dddbca5692859",
  measurementId: "G-S7BS3GJECP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtention de l'instance de Firestore
const db = getFirestore(app);

// Export de l'instance de Firestore
export default db;