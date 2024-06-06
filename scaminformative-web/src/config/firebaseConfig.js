import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAcS9qT-M45i7cin682B9IkfbYW2JO0JBQ",
//   authDomain: "orderandpickup-731bd.firebaseapp.com",
//   databaseURL: "https://orderandpickup-731bd-default-rtdb.firebaseio.com",
//   projectId: "orderandpickup-731bd",
//   storageBucket: "orderandpickup-731bd.appspot.com",
//   messagingSenderId: "1098866334933",
//   appId: "1:1098866334933:web:1893396a7d45158c81d65c",
//   measurementId: "G-HGE4DR3ELZ"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDmbDSAe5h2OGMJXbP5w8-NealA81uusus",
  authDomain: "twitter-b7e65.firebaseapp.com",
  projectId: "twitter-b7e65",
  storageBucket: "twitter-b7e65.appspot.com",
  messagingSenderId: "678357277801",
  appId: "1:678357277801:web:8b3c79fb898a30b70256f8",
  measurementId: "G-KQ718E561P",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
