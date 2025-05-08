// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth }      from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getStorage }   from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLzOk0NxjBj9yuYvqNpTZlLDJQ_9VshFY",
  authDomain: "elshabaka-f43e3.firebaseapp.com",
  projectId: "elshabaka-f43e3",
  storageBucket: "elshabaka-f43e3.appspot.com",
  messagingSenderId: "833930897380",
  appId: "1:833930897380:web:ae08524658e4b42147c9f1",
  measurementId: "G-445F74ZSMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);
