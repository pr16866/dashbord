// Import the functions you need from the SDKs you need
// import firebase from 'firebase';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// import "firebase/storage";
// import "firebase/firestore";
// import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyALLF_E0kh-Mi-3pI8EuWiMSHtW3W3kyWM",
  authDomain: "urban-car-wash.firebaseapp.com",
  projectId: "urban-car-wash",
  storageBucket: "urban-car-wash.appspot.com",
  messagingSenderId: "497078328524",
  appId: "1:497078328524:web:0d13022e9a257305453669"
};

// Initialize Firebase

// firebase.initializeApp({});
let app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage(app);
const auth = getAuth(app);
export { storage, db, auth };
