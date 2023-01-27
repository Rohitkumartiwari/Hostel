import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-LuN8dMfZx8fw7uvrcc5Xhh2CrlIDP4M",
  authDomain: "chatbot-8a2ea.firebaseapp.com",
  projectId: "chatbot-8a2ea",
  storageBucket: "chatbot-8a2ea.appspot.com",
  messagingSenderId: "657153112974",
  appId: "1:657153112974:web:969b8e5b71ada11938c2df",
  measurementId: "G-YFBWWCX231",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
