// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsTWevJRXkGn6CHRh2AXq_r3msnPFjRZA",
  authDomain: "pro-trainer-15bba.firebaseapp.com",
  projectId: "pro-trainer-15bba",
  storageBucket: "pro-trainer-15bba.appspot.com",
  messagingSenderId: "237688754277",
  appId: "1:237688754277:web:7dcde4da07ef34f8ae768c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
