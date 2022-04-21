// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "@firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeUX0KeTIYeEzOpuhyGqeLCheCVij6iTY",
  authDomain: "instagram-clone-feb11.firebaseapp.com",
  projectId: "instagram-clone-feb11",
  storageBucket: "instagram-clone-feb11.appspot.com",
  messagingSenderId: "73998999034",
  appId: "1:73998999034:web:5697be48b9e33922019843"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize firestore
const db = getFirestore();

// Initialize storage
const storage = getStorage()

export { app, db, storage };