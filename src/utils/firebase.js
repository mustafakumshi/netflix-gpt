// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcl0j9_9i6kqhesld5ynK_62mzRA0UDPE",
  authDomain: "netflixgpt-88.firebaseapp.com",
  projectId: "netflixgpt-88",
  storageBucket: "netflixgpt-88.appspot.com",
  messagingSenderId: "34795280650",
  appId: "1:34795280650:web:cb39707aff9380df3ec2f3",
  measurementId: "G-REZHFKG1J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();