// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_4IYmwjNniJiS83nlZyyjOLqYN4wttKQ",
  authDomain: "ott-platform-96ce1.firebaseapp.com",
  projectId: "ott-platform-96ce1",
  storageBucket: "ott-platform-96ce1.appspot.com",
  messagingSenderId: "991002683457",
  appId: "1:991002683457:web:a0fd0fe260acc83e4e3ec0",
  measurementId: "G-0QDSVXBK1E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app)
export const db = getFirestore(app)