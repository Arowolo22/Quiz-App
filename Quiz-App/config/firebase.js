// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBY-KMKF1KeIxJpMxw81hUYkGTGxSyWVbU",
  authDomain: "quiz-app-81829.firebaseapp.com",
  projectId: "quiz-app-81829",
  storageBucket: "quiz-app-81829.firebasestorage.app",
  messagingSenderId: "369912578024",
  appId: "1:369912578024:web:878d18abd5ef218c29ae5d",
  measurementId: "G-L5NB2KMHXB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;