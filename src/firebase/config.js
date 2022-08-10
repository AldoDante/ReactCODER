
import { initializeApp } from "firebase/app";



/* The configuration of the firebase app. */
const firebaseConfig = {
  apiKey: "AIzaSyCCYrBMro7-eikS7fXjwi2Yr14fIMPUpQc",
  authDomain: "antivilo-cart.firebaseapp.com",
  projectId: "antivilo-cart",
  storageBucket: "antivilo-cart.appspot.com",
  messagingSenderId: "880150296684",
  appId: "1:880150296684:web:083c998ce8d6eb0ffe4049"
};


/* Initializing the firebase app. */
const app = initializeApp(firebaseConfig);


export const firebaseConnections = () => app