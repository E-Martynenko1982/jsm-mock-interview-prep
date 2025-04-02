// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW6zyb30e7MfLFI5XN8HDN2QOixT2075Q",
  authDomain: "prepwise-24093.firebaseapp.com",
  projectId: "prepwise-24093",
  storageBucket: "prepwise-24093.firebasestorage.app",
  messagingSenderId: "471070523580",
  appId: "1:471070523580:web:5b6ab7278893c2f23150b9",
  measurementId: "G-HPNJ9C0NG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);