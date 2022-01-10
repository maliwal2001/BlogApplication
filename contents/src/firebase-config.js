// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD2jAb4p_yxjbcL6ncdnx2C0UZG-lUA6A",
  authDomain: "blogproject-d2b53.firebaseapp.com",
  projectId: "blogproject-d2b53",
  storageBucket: "blogproject-d2b53.appspot.com",
  messagingSenderId: "536537885260",
  appId: "1:536537885260:web:0c91b989a426709f5822e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();