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
  apiKey: "AIzaSyChrTLgRW2Qr39LqkXzade_q0IQafhuJh0",
  authDomain: "drive-clone-e94a7.firebaseapp.com",
  projectId: "drive-clone-e94a7",
  storageBucket: "drive-clone-e94a7.appspot.com",
  messagingSenderId: "638336146412",
  appId: "1:638336146412:web:9d5c337d81d763ad3ebec9",
  measurementId: "G-T8L82K234Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
// export const analytics = getAnalytics(app);