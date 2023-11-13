// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtTB69csWuERjN0_NPjQqcyBnDtZeTh3k",
  authDomain: "choppanheiro-auth.firebaseapp.com",
  projectId: "choppanheiro-auth",
  storageBucket: "choppanheiro-auth.appspot.com",
  messagingSenderId: "580822470476",
  appId: "1:580822470476:web:0816654feb2d12544a09e9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Firebase auth
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// Firestore
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);