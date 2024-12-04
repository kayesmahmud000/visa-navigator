// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZWlMzMEfoiwKz9AxjDGTBVgzAPfWFrFw",
  authDomain: "navi-visa.firebaseapp.com",
  projectId: "navi-visa",
  storageBucket: "navi-visa.firebasestorage.app",
  messagingSenderId: "779661726115",
  appId: "1:779661726115:web:3930e8b9bee998f665ca16"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app