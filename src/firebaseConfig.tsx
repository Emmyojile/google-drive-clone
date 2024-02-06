// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBxqWEDzky0GS4x4uib7_ds8iZEOamEHDE",
  authDomain: "clone-47773.firebaseapp.com",
  projectId: "clone-47773",
  storageBucket: "clone-47773.appspot.com",
  messagingSenderId: "310761025104",
  appId: "1:310761025104:web:0d0fc63d1cd5a00bf6ab55",
  measurementId: "G-TEV262JTSN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
// export const analytics = getAnalytics(app);