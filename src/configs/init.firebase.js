// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBjPXgdmUyE0i_jpR1QCcbJp3FRFzyB6_o",
  authDomain: "miauto-34c40.firebaseapp.com",
  projectId: "miauto-34c40",
  storageBucket: "miauto-34c40.appspot.com",
  messagingSenderId: "1074738778919",
  appId: "1:1074738778919:web:1d0caf35534e0ab6528f02",
  measurementId: "G-Z014BXV8GF",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebaseApp;
