// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMT6q09NJHCXoxVgHkwm45L2YKgz1fR3A",
  authDomain: "comi51150.firebaseapp.com",
  projectId: "comi51150",
  storageBucket: "comi51150.appspot.com",
  messagingSenderId: "610995544669",
  appId: "1:610995544669:web:fa8645990e743ec221a3b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)