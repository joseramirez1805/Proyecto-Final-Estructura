// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3vyQ3uficFteGdYq_D51JXsJSMc1VHyU",
  authDomain: "proyecto-final-668ee.firebaseapp.com",
  projectId: "proyecto-final-668ee",
  storageBucket: "proyecto-final-668ee.firebasestorage.app",
  messagingSenderId: "709706011083",
  appId: "1:709706011083:web:3f5fa72c10e4195d5d664e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const firebaseStorage = getStorage(app)
const db = getFirestore()

export {app, auth, firebaseStorage, db}