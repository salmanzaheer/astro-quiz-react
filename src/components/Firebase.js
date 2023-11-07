// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ8ce_BakYyFATCAcd2l7qYP2ItPTx30M",
  authDomain: "astr161.firebaseapp.com",
  projectId: "astr161",
  storageBucket: "astr161.appspot.com",
  messagingSenderId: "770846773467",
  appId: "1:770846773467:web:de1ac470d83f486a62bcfe",
  measurementId: "G-YHQ9GG95CH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
