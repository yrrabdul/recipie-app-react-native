
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq0drk2Acpt_O_W_FbCJcDN9Rg0wkXhFI",
  authDomain: "foodmood-32af6.firebaseapp.com",
  databaseURL: "https://foodmood-32af6-default-rtdb.firebaseio.com",
  projectId: "foodmood-32af6",
  storageBucket: "foodmood-32af6.appspot.com",
  messagingSenderId: "371947757623",
  appId: "1:371947757623:web:41a19a95b65d1615a55fb2",
  measurementId: "G-3BLVMW53XB"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
export {app, auth, db};


