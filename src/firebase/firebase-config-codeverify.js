// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "datingapp-codeverify.firebaseapp.com",
  projectId: "datingapp-codeverify",
  storageBucket: "datingapp-codeverify.appspot.com",
  messagingSenderId: "262256265161",
  appId: "1:262256265161:web:38cabbffece8be401f4a18",
  measurementId: "G-R96CFBQLM7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbcode = getFirestore(app);
