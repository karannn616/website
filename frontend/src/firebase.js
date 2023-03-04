// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsCqkOw5nEn8j9pCPPhmltpv9OOIfiqIQ",
  authDomain: "rootfood-5e885.firebaseapp.com",
  projectId: "rootfood-5e885",
  storageBucket: "rootfood-5e885.appspot.com",
  messagingSenderId: "248578604511",
  appId: "1:248578604511:web:d3745b7b87bf20e3c1186a",
  measurementId: "G-F1CJVCL7WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);