import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth, setPersistence, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhFKwxf4zyLUCONfmadGGE9WOMMu0idZY",
  authDomain: "testauth-e55b7.firebaseapp.com",
  projectId: "testauth-e55b7",
  storageBucket: "testauth-e55b7.firebasestorage.app",
  messagingSenderId: "258851219168",
  appId: "1:258851219168:web:d528971e375ce87cd79285"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 
// const analytics = getAnalytics(app);

setPersistence(auth, browserSessionPersistence) // Use browserSessionPersistence for session-only persistence
  .then(() => {
    // Now we can use auth for sign-in methods, and the persistence is set
    console.log("Persistence set to local storage.");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });