import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, signOut } from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqZ8DPYlpP2G825KtdcnSlOEYukE5xmZA",
  authDomain: "chat-bot-cb470.firebaseapp.com",
  projectId: "chat-bot-cb470",
  storageBucket: "chat-bot-cb470.appspot.com",
  messagingSenderId: "418726094514",
  appId: "1:418726094514:web:ba0a99cd86fac4c3648bab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

export { auth, db, sendPasswordReset, logout };
export default app;
