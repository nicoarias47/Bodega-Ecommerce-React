// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// traemos firestone
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqqzdbag6McDDTVaPw55HMpWU2BUwnq7o",
  authDomain: "bodega-soul.firebaseapp.com",
  projectId: "bodega-soul",
  storageBucket: "bodega-soul.appspot.com",
  messagingSenderId: "769363171296",
  appId: "1:769363171296:web:2680813970ffcd22a9bd85",
  measurementId: "G-1SSMBT5GFK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//database
export const db = getFirestore(app);
