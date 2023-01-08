// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdwFXgveqxFlwLs55HZHPjU-RjkCR6aBk",
  authDomain: "computer-parts-client.firebaseapp.com",
  projectId: "computer-parts-client",
  storageBucket: "computer-parts-client.appspot.com",
  messagingSenderId: "398925863111",
  appId: "1:398925863111:web:fb97f685ad14e350d846e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
