// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_USERS_KEY,
  authDomain: "datingapp-user.firebaseapp.com",
  projectId: "datingapp-user",
  storageBucket: "datingapp-user.appspot.com",
  messagingSenderId: "57871751886",
  appId: "1:57871751886:web:16480acee5adad41e2ce9f",
};

const app = initializeApp(firebaseConfig);

export const dbusers = getFirestore(app);
