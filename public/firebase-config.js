// Import the Firebase SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMKy56kNulrMpAmajupxiz1WOjAeKyDJw",
  authDomain: "web-with-auth-db-v1-project.firebaseapp.com",
  projectId: "web-with-auth-db-v1-project",
  storageBucket: "web-with-auth-db-v1-project.firebasestorage.app",
  messagingSenderId: "64924410740",
  appId: "1:64924410740:web:f8c3f8d923e8cd5db50221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
export { db, doc, setDoc, collection, getDocs };

