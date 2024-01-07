// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxZvWXeDcxTsd52sHsAvQnpreBvqdgbH4",
  authDomain: "email-password-auth-47ef1.firebaseapp.com",
  projectId: "email-password-auth-47ef1",
  storageBucket: "email-password-auth-47ef1.appspot.com",
  messagingSenderId: "254614556698",
  appId: "1:254614556698:web:45cf848fae39e7ce6941a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app