// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn6viqkszyxLRzlJF0dpp65RdOjFQCidQ",
  authDomain: "foodwala-f4a2a.firebaseapp.com",
  projectId: "foodwala-f4a2a",
  storageBucket: "foodwala-f4a2a.firebasestorage.app",
  messagingSenderId: "778553072373",
  appId: "1:778553072373:web:4584eac5a00ae3b58303bc",
  measurementId: "G-DR9H0454JQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{db}