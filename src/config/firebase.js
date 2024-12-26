import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDQv04ms27sMwcE5kR4VLjqwo7pNOEfANY",
  authDomain: "blog-app-33b59.firebaseapp.com",
  projectId: "blog-app-33b59",
  storageBucket: "blog-app-33b59.firebasestorage.app",
  messagingSenderId: "711512835572",
  appId: "1:711512835572:web:bc6d0e23462d8211a4e5a1",
  measurementId: "G-88BCLLBK4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth