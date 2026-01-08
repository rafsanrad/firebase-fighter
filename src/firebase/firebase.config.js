// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmQkcgypZXWTfakxywkVu2b9I6NkguKtg",
  authDomain: "fir-fighter-37a21.firebaseapp.com",
  projectId: "fir-fighter-37a21",
  storageBucket: "fir-fighter-37a21.firebasestorage.app",
  messagingSenderId: "581173862276",
  appId: "1:581173862276:web:12c8d5471e6c4426bf87d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);