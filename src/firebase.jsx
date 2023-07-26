// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDskOE87feSD5LVFdCBIB5o_Gd173HieQ",
  authDomain: "easyshare-udem.firebaseapp.com",
  projectId: "easyshare-udem",
  storageBucket: "easyshare-udem.appspot.com",
  messagingSenderId: "423553745077",
  appId: "1:423553745077:web:e1df6ba8a09c771c333efc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)