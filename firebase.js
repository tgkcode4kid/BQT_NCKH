// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzdB2ocWWJ66W1xsCp4qwIkk-WZTrUVZ8",
  authDomain: "bqt-nckh.firebaseapp.com",
  projectId: "bqt-nckh",
  storageBucket: "bqt-nckh.firebasestorage.app",
  messagingSenderId: "245453956927",
  appId: "1:245453956927:web:5ecd636b6c8ff5d92b958a",
  measurementId: "G-J50TVMPTRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
