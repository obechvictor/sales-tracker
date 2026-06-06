import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKz5GaO3y3S6MZSLFgUCfJntyZW6r53_c",
  authDomain: "sales-tracker-ed7d3.firebaseapp.com",
  projectId: "sales-tracker-ed7d3",
  storageBucket: "sales-tracker-ed7d3.firebasestorage.app",
  messagingSenderId: "465463749935",
  appId: "1:465463749935:web:1d5b3cb8c96f2f4224c5da",
  measurementId: "G-6P87XZ1ET4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
