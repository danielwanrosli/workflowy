// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// note for me: will need to import firestore where i need it in other files

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDtSh-ZJbEI7qSagdCgi38-0dKVTf6vZw",
  authDomain: "workflowy-prototype.firebaseapp.com",
  projectId: "workflowy-prototype",
  storageBucket: "workflowy-prototype.appspot.com",
  messagingSenderId: "250217655248",
  appId: "1:250217655248:web:aae79f55ffa004745967d5",
  measurementId: "G-TFSZPB32G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);