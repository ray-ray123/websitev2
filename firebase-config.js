// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqnOCrqFVQp6RER3Bcc8h6bIL0qtr20GM",
  authDomain: "wevc-9011c.firebaseapp.com",
  projectId: "wevc-9011c",
  storageBucket: "wevc-9011c.appspot.com",
  messagingSenderId: "82019226601",
  appId: "1:82019226601:web:274e9ac01c5158567c7178",
  measurementId: "G-JL76E20HBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
