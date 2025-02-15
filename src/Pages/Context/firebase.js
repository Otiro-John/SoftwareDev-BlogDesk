// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrkDTXPoXRUcdfLY5UJMSBCAgKLmjgKCg",
  authDomain: "signin-43f8f.firebaseapp.com",
  projectId: "signin-43f8f",
  storageBucket: "signin-43f8f.firebasestorage.app",
  messagingSenderId: "476907007255",
  appId: "1:476907007255:web:470580588296c9cc21db52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign-in function
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User signed in:", result.user);
    return result.user;
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

// Sign-out function
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export { auth, signInWithGoogle, logout };