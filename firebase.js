// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8Jbbbxl-crISZFr4OLiXEDG-cJGmYMxQ",
  authDomain: "laundry-application-9975b.firebaseapp.com",
  projectId: "laundry-application-9975b",
  storageBucket: "laundry-application-9975b.appspot.com",
  messagingSenderId: "283952418774",
  appId: "1:283952418774:web:fc8851db5c860a85379e77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
