// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcCTiD4dGDiuX3cxT5qjkydjwhOUYyMTw",
  authDomain: "surveyapp-ca063.firebaseapp.com",
  projectId: "surveyapp-ca063",
  storageBucket: "surveyapp-ca063.firebasestorage.app",
  messagingSenderId: "581944932840",
  appId: "1:581944932840:web:df9b58dbe63f36924e0c5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };