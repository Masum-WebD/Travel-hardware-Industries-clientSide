// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0HB44zO-qGL6S8t_2a7YxDbpg24-6Ka0",
  authDomain: "travel-hardware-industries.firebaseapp.com",
  projectId: "travel-hardware-industries",
  storageBucket: "travel-hardware-industries.appspot.com",
  messagingSenderId: "451220471279",
  appId: "1:451220471279:web:adcbeaf1e45d7070400a1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth