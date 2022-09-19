// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSYbtdNJ_b_axN83a0_tL21mU6SCyaC6o",
  authDomain: "netflix-clone-65c08.firebaseapp.com",
  projectId: "netflix-clone-65c08",
  storageBucket: "netflix-clone-65c08.appspot.com",
  messagingSenderId: "271712669560",
  appId: "1:271712669560:web:dd4da30c0c141b0cb5028d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
