// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDydyls6P-PXXqZmJkPrQO01l18394VY4",
  authDomain: "netflixgpt-7a1a7.firebaseapp.com",
  projectId: "netflixgpt-7a1a7",
  storageBucket: "netflixgpt-7a1a7.appspot.com",
  messagingSenderId: "897482621760",
  appId: "1:897482621760:web:5c4d2326fcf0149e5870a5",
  measurementId: "G-4LTNQQ3R1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
