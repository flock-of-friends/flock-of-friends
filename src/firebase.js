// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0EPDZiU0oSq8-SN1PPtTXRsHzehRW6hQ",
  authDomain: "flock-of-friends.firebaseapp.com",
  projectId: "flock-of-friends",
  storageBucket: "flock-of-friends.appspot.com",
  messagingSenderId: "921209747861",
  appId: "1:921209747861:web:22f41eb84b74e434009e9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;