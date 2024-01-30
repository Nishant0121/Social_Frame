// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDKmfj04vCL-pd6ctr4AbimMr7oH75BIo",
  authDomain: "socialframe-ef39c.firebaseapp.com",
  projectId: "socialframe-ef39c",
  storageBucket: "socialframe-ef39c.appspot.com",
  messagingSenderId: "321665077225",
  appId: "1:321665077225:web:98e8524705216fa6888578",
  measurementId: "G-DSTEQS9WHD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);