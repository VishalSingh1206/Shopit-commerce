import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5tETlnCnoY31msfVJDDE4Ex1gXlNzV0g",
  authDomain: "shopit-commerce.firebaseapp.com",
  projectId: "shopit-commerce",
  storageBucket: "shopit-commerce.appspot.com",
  messagingSenderId: "1051193746048",
  appId: "1:1051193746048:web:b29265b25351311172fc65",
  measurementId: "G-CBKM8CRR4N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
