// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6RzaSiFbq09JUDcR_vlPx2X3nRClCb1s",
  authDomain: "netflix-gpt-c869e.firebaseapp.com",
  projectId: "netflix-gpt-c869e",
  storageBucket: "netflix-gpt-c869e.appspot.com",
  messagingSenderId: "350626602055",
  appId: "1:350626602055:web:cefefca1da76dc84266562",
  measurementId: "G-WZZFKTKVSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
