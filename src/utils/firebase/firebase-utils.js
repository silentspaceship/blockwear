// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqwp805BL2OSOIp1w4CLaXjjNa04UBLco",
  authDomain: "blockwear-84c7c.firebaseapp.com",
  projectId: "blockwear-84c7c",
  storageBucket: "blockwear-84c7c.appspot.com",
  messagingSenderId: "623956364836",
  appId: "1:623956364836:web:d34ece7ad47d4d78a1d2b1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Set Google Authenticator Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
};
