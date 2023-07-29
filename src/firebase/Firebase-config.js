// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaWRS6fUg0Yz4fOb91ebwqOy8AoppzIPc",
  authDomain: "react-auth-8c7c4.firebaseapp.com",
  projectId: "react-auth-8c7c4",
  storageBucket: "react-auth-8c7c4.appspot.com",
  messagingSenderId: "231000860513",
  appId: "1:231000860513:web:0f7c17c926efd890fd8720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);