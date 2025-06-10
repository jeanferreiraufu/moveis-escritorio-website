 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxMrgPTriVCoxHOwmDVq4SOgko8ehm9EA",
  authDomain: "moveis-escritorio-website.firebaseapp.com",
  projectId: "moveis-escritorio-website",
  storageBucket: "moveis-escritorio-website.firebasestorage.app",
  messagingSenderId: "1084875983181",
  appId: "1:1084875983181:web:4d968f23c2f800389ccf04",
  measurementId: "G-WP3G6VR6CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };