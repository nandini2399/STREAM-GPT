// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG59fuSjomzo1dyrY5fKbtAHmZRuAvhjk",
  authDomain: "stream-gpt-fc52e.firebaseapp.com",
  projectId: "stream-gpt-fc52e",
  storageBucket: "stream-gpt-fc52e.firebasestorage.app",
  messagingSenderId: "45494780419",
  appId: "1:45494780419:web:74a318f7d5e939bb2f4436",
  measurementId: "G-80X06FBJRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);