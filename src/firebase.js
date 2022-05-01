// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzXwr3v1LxbkGv4Hy-DXFGSQNAwnLQn_s",
  authDomain: "book-demo-ad666.firebaseapp.com",
  projectId: "book-demo-ad666",
  storageBucket: "book-demo-ad666.appspot.com",
  messagingSenderId: "102840555187",
  appId: "1:102840555187:web:e45fdd6eeeb52b9af142c6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
