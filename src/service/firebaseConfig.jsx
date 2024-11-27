// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBrFjvSGO6Vp3SWpFK1cHFXBRwIY3wuOGg",
  authDomain: "ai-trip-planner-2f452.firebaseapp.com",
  projectId: "ai-trip-planner-2f452",
  storageBucket: "ai-trip-planner-2f452.firebasestorage.app",
  messagingSenderId: "545220692151",
  appId: "1:545220692151:web:cf6528316072af579a2532",
  measurementId: "G-ZK76DXHMV2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);